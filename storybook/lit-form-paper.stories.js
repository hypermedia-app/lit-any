import { html } from 'lit-html/lib/lit-extended';
import { directive } from 'lit-html';
import { storiesOf } from '@storybook/polymer/dist/client/index';
import LitWrap from './decorators/litWrap';
import { FieldTemplates } from '../src';

import '../bower_components/paper-input/paper-input.html';

FieldTemplates.byName('material design')
    .when
    .fieldMatches(f => f.type === 'integer')
    .renders((f, id, v, set) =>
        html`<paper-input id=${id} 
                type=number
                placeholder=${f.title}
                value=${v} 
                on-change=${e => set(Number.parseInt(e.target.value, 0))}></paper-input>`);

storiesOf('lit-form', module)
    .addDecorator(LitWrap)
    .add('paper elements', () => {
        const contract = {
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

        let form;
        const getForm = (part) => {
            form = part.element;
        };

        return html`<lit-form ref="${directive(getForm)}"
                          no-labels
                          contract="${contract}"
                          template-registry="material design"
                          value="${value}"></lit-form>
                <button on-click="${() => alert(JSON.stringify(form.value))}">
                    Submit!
                </button>`;
    });
