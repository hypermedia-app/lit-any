import { html } from 'lit-html/lib/lit-extended';
import { directive } from 'lit-html';
import { storiesOf } from '@storybook/polymer/dist/client/index';
import '../src/elements/lit-form';
import { FieldTemplates } from '../src';
import { showLabels, defaultValue, submitButton, contract } from './knobs';
import onSubmit from './helpers/submit-handler';

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
                          value="${defaultValue(value)}"
                          on-submit="${onSubmit}"></lit-form>`;
    });

storiesOf('lit-form', module)
    .add('submitting', () => {
        const c = {
            fields: [
                {
                    property: 'age',
                    title: 'Your age',
                    type: 'integer',
                },
            ],
        };

        let form;
        const getForm = (part) => {
            form = part.element;
        };

        return html`
<lit-form ref="${directive(getForm)}"
          contract="${contract(c)}" 
          submitButtonLabel=${submitButton('Submit')}
          on-submit="${onSubmit}"></lit-form>

<button on-click="${() => form.submit()}">Submit from the outside</button>`;
    });
