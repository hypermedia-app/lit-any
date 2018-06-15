import { html } from 'lit-html/lib/lit-extended';
import { storiesOf } from '@storybook/polymer/dist/client';
import { FieldTemplates } from '../src';
import { contract, showLabels, submitButton } from './knobs';
import notes from './notes/lit-form/custom-elements.md';
import onSubmit from './helpers/submit-handler';

import '../bower_components/paper-input/paper-input.html';

storiesOf('lit-form', module)
    .add(
        'Field templates', () => {
            FieldTemplates.byName('custom-fields')
                .when
                .fieldMatches(f => f.type === 'integer')
                .renders((f, id, v, set) =>
                    html`<paper-input id=${id} 
                        type=number
                        label=${f.title}
                        value=${v} 
                        on-change=${e => set(Number.parseInt(e.target.value, 0))}></paper-input>`);

            const c = {
                fields: [
                    {
                        property: 'age',
                        title: 'Your age',
                        type: 'integer',
                    },
                ],
            };

            return html`<lit-form
                          noLabels="${!showLabels(false)}"
                          contract="${contract(c)}"
                          submitButtonLabel=${submitButton('Register')}
                          template-registry="custom-fields"
                          on-submit="${onSubmit}"></lit-form>`;
        },
        {
            notes: { markdown: notes },
        },
    );
