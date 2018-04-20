import { html } from 'lit-html/lib/lit-extended';
import { directive } from 'lit-html';
import { storiesOf } from '@storybook/polymer/dist/client/index';
import LitWrap from './decorators/litWrap';
import '../src/elements/lit-form';
import { FieldTemplates } from '../src/template-registry';

FieldTemplates.default
    .when
    .fieldMatches(f => f.type === 'integer')
    .renders((f, id, v, set) => html`<input type=number value=${v} on-change=${e => set(Number.parseInt(e.target.value, 0))}>`);

storiesOf('lit-form', module)
    .addDecorator(LitWrap)
    .add('basic', () => {
        const contract = {
            fields: [
                {
                    property: 'age',
                    type: 'integer',
                },
            ],
        };

        const value = {
            age: 30,
        };

        let form;
        const getForm = (part) => {
            form = part.element;
        };

        return html`<lit-form ref="${directive(getForm)}" 
                          contract="${contract}" 
                          value="${value}"></lit-form>
                <button on-click="${() => alert(JSON.stringify(form.value))}">
                    Submit!
                </button>`;
    });
