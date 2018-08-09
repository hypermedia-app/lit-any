import { storiesOf } from '@storybook/polymer';
import { html } from 'lit-html/lib/lit-extended';
import moment from 'moment';
import { ViewTemplates } from 'lit-any';
import { defaultValue } from './knobs';
import basic from './notes/lit-view/basic.md';
import recursive from './notes/lit-view/recursive.md';
import recursiveElements from './notes/lit-view/recursive-elements.md';

storiesOf('lit-view', module)
    .add('basic', () => {
        ViewTemplates.byName('basic')
            .when
            .valueMatches(v => v.type === 'Person')
            .renders((r, v) => html`Hello, my name is ${v.fullName}`);

        const value = {
            type: 'Person',
            fullName: 'Louis Litt',
        };

        return html`<lit-view value="${defaultValue(value)}" 
                              template-registry="basic"></lit-view>`;
    }, {
        notes: {
            markdown: basic,
        },
    });

storiesOf('lit-view/nesting', module)
    .add('using callback', () => {
        ViewTemplates.byName('recursive')
            .when
            .valueMatches(value => value.type === 'Person')
            .renders((render, person) =>
                html`Hello, my name is ${person.fullName}. 
                     I was born ${render(person.birthDate)}`);

        ViewTemplates.byName('recursive').when
            .valueMatches(value => value instanceof Date || Date.parse(value))
            .renders((_, date) => html`${moment(date).fromNow()}`);

        const value = {
            type: 'Person',
            fullName: 'Louis Litt',
            birthDate: new Date(1976, 8, 12),
        };

        return html`<lit-view value="${defaultValue(value)}" 
                              template-registry="recursive"></lit-view>`;
    }, {
        notes: {
            markdown: recursive,
        },
    });

storiesOf('lit-view/nesting', module)
    .add('using view element', () => {
        ViewTemplates.byName('nested')
            .when
            .valueMatches(value => value.type === 'Person')
            .renders((render, person) =>
                html`Hello, my name is ${person.fullName}. 
                     I was born
                     <lit-view value="${person.birthDate}"
                               template-registry="nested"></lit-view>`);

        ViewTemplates.byName('nested').when
            .valueMatches(value => value instanceof Date || Date.parse(value))
            .renders((_, date) => html`${moment(date).fromNow()}`);

        const value = {
            type: 'Person',
            fullName: 'Louis Litt',
            birthDate: new Date(1976, 8, 12),
        };

        return html`<lit-view value="${defaultValue(value)}" 
                              template-registry="nested"></lit-view>`;
    }, {
        notes: {
            markdown: recursiveElements,
        },
    });
