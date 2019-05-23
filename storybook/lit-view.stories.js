import { storiesOf } from '@storybook/polymer';
import { html } from 'lit-html';
import moment from 'moment';
import { object, text } from '@storybook/addon-knobs';
import '@lit-any/lit-any/lit-view';
import ViewTemplates from '@lit-any/lit-any/views';
import { defaultValue } from './knobs';
import basic from './notes/lit-view/basic';
import recursive from './notes/lit-view/recursive';
import recursiveElements from './notes/lit-view/recursive-elements';
import recursiveWithParams from './notes/lit-view/recursive-with-params';

storiesOf('lit-view', module)
    .add('basic', () => {
        ViewTemplates.byName('basic')
            .when
            .valueMatches(v => v.type === 'Person')
            .renders(v => html`Hello, my name is ${v.fullName}`);

        const value = {
            type: 'Person',
            fullName: 'Louis Litt',
        };

        return basic(html`<lit-view .value="${defaultValue(object, value)}" 
                              template-registry="basic"></lit-view>`);
    });

storiesOf('lit-view/nesting', module)
    .add('using callback', () => {
        ViewTemplates.byName('recursive')
            .when
            .valueMatches(value => value.type === 'Person')
            .renders((person, render) =>
                html`Hello, my name is ${person.fullName}. 
                     I was born ${render(person.birthDate)}`);

        ViewTemplates.byName('recursive').when
            .valueMatches(value => value instanceof Date || Date.parse(value))
            .renders(date => html`${moment(date).fromNow()}`);

        const value = {
            type: 'Person',
            fullName: 'Louis Litt',
            birthDate: new Date(1976, 8, 12),
        };

        return recursive(html`<lit-view .value="${defaultValue(object, value)}" 
                              template-registry="recursive"></lit-view>`);
    });

storiesOf('lit-view/nesting', module)
    .add('using view element', () => {
        ViewTemplates.byName('nested')
            .when
            .valueMatches(value => value.type === 'Person')
            .renders(person =>
                html`Hello, my name is ${person.fullName}. 
                     I was born
                     <lit-view .value="${person.birthDate}"
                               template-registry="nested"></lit-view>`);

        ViewTemplates.byName('nested').when
            .valueMatches(value => value instanceof Date || Date.parse(value))
            .renders(date => html`${moment(date).fromNow()}`);

        const value = {
            type: 'Person',
            fullName: 'Louis Litt',
            birthDate: new Date(1976, 8, 12),
        };

        return recursiveElements(html`<lit-view .value="${defaultValue(object, value)}" 
                              template-registry="nested"></lit-view>`);
    });

storiesOf('lit-view/nesting', module)
    .add('passing context params', () => {
        ViewTemplates.byName('recursive-with-params')
            .when
            .valueMatches(value => value.type === 'Person')
            .renders((person, render) => {
                const params = {
                    format: text('Date format', 'LL'),
                };

                return html`Hello, my name is ${person.fullName}. 
                            I was born on ${render(person.birthDate, params)}`;
            });

        ViewTemplates.byName('recursive-with-params').when
            .valueMatches(value => value instanceof Date || Date.parse(value))
            .renders((date, next, scope, params) => html`${moment(date).format(params.format)}`);

        const value = {
            type: 'Person',
            fullName: 'Louis Litt',
            birthDate: new Date(1976, 8, 12),
        };

        return recursiveWithParams(html`<lit-view .value="${defaultValue(object, value)}" 
                              template-registry="recursive-with-params"></lit-view>`);
    });
