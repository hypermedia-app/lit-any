import { storiesOf } from '@storybook/polymer';
import { html } from 'lit-html/lib/lit-extended';
import '../src/elements/lit-view';
import { ViewTemplates } from '../src';
import { defaultValue } from './knobs';

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
    })
    .add('recursive', () => {
        ViewTemplates.byName('recursive')
            .when
            .valueMatches(v => v.type === 'Person')
            .renders((render, v) => html`Hello, my name is ${v.fullName}. I was born on ${render(v.birthDate)}`);

        ViewTemplates.byName('recursive').when
            .valueMatches(v => v instanceof Date)
            .renders((_, v) => {
                const dateFormatted = v.toISOString().split('T')[0];
                return html`<input readonly type="date" value="${dateFormatted}">`;
            });

        const value = {
            type: 'Person',
            fullName: 'Louis Litt',
            birthDate: new Date(1976, 8, 12),
        };

        return html`<lit-view value="${defaultValue(value)}" 
                          template-registry="recursive"></lit-view>`;
    });
