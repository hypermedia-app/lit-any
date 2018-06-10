import { html } from 'lit-html/lib/lit-extended';
import { storiesOf } from '@storybook/polymer/dist/client/index';
import '../src/elements/lit-form';
import { FieldTemplates } from '../src';
import { showLabels, defaultValue, submitButton, contract } from './knobs';

FieldTemplates.default
    .when
    .fieldMatches(f => f.type === 'integer')
    .renders((f, id, v, set) =>
        html`<input id=${id} 
                type=number 
                value=${v} 
                on-change=${e => set(Number.parseInt(e.target.value, 0))}>`);

storiesOf('lit-form', module)
    .add('basic', () => {
        const c = {
            fields: [
                {
                    property: 'age',
                    title: 'Your age',
                    type: 'integer',
                },
            ],
        };

        const value = {
            age: 30,
        };

        return html`<lit-form
                          contract="${contract(c)}" 
                          noLabels="${!showLabels()}"
                          submitButtonLabel=${submitButton('Register')}
                          value="${defaultValue(value)}"></lit-form>`;
    });
