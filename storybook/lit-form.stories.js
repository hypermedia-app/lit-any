import { html } from 'lit-html/lib/lit-extended';
import { directive } from 'lit-html';
import { storiesOf } from '@storybook/polymer/dist/client/index';
import { select, button } from '@storybook/addon-knobs';
import { FieldTemplates } from '../lit-any/src';
import { defaultValue, submitButton, resetButton, contract, noSubmitButton, noResetButton, showLabels } from './knobs';
import onSubmit from './helpers/submit-handler';
import buttonsNotes from './notes/lit-form/buttons.md';
import fallbackNotes from './notes/lit-form/fallback-input.md';
import notes from './notes/lit-form/custom-elements.md';
import fieldValueDecoratorNotes from './notes/lit-form/field-value-decorator.md';

import '../bower_components/paper-input/paper-input.html';

FieldTemplates.default
    .when
    .fieldMatches(f => f.type === 'integer')
    .renders((f, id, v, set) =>
        html`<input id=${id} 
                type=number 
                value=${v} 
                on-change=${e => set(Number.parseInt(e.target.value, 0))}>`);

storiesOf('lit-form', module)
    .add('Fallback input', () => {
        const c = {
            fields: [
                {
                    property: 'age',
                    title: 'Your age',
                    type: 'custom',
                },
            ],
        };

        const value = {
            age: 30,
        };

        FieldTemplates.byName('catch-all').when
            .fieldMatches(() => true)
            .renders((f, id, v, set) =>
                html`<paper-input id=${id} 
                 label=${f.title}
                 value=${v} 
                 on-change=${e => set(e.target.value)}></paper-input>`);

        const registry = select('Fallback behavior', ['default', 'catch-all'], 'default', 'Behavior');

        return html`<lit-form
                          contract="${contract(c)}" 
                          noLabels="${registry === 'catch-all'}"
                          submitButtonLabel=${submitButton('Register')}
                          value="${defaultValue(value)}"
                          template-registry$="${registry}"
                          on-submit="${onSubmit}"></lit-form>`;
    }, {
        notes: { markdown: fallbackNotes },
    });

storiesOf('lit-form', module)
    .add('Form buttons', () => {
        const c = {
            target: 'http://example.com',
            method: 'POST',
            fields: [
                {
                    property: 'age',
                    title: 'Your age',
                },
            ],
        };

        let form;
        const getForm = (part) => {
            form = part.element;
        };

        button('Submit programmatically', () => form.submit(), 'Behavior');
        button('Reset programmatically', () => form.reset(), 'Behavior');

        return html`
<lit-form ref="${directive(getForm)}"
          contract="${contract(c)}" 
          noSubmitButton="${noSubmitButton()}"
          submitButtonLabel=${submitButton('Submit')}
          noResetButton="${noResetButton()}"
          resetButtonLabel=${resetButton('Reset')}
          on-submit="${onSubmit}"></lit-form>`;
    }, {
        notes: { markdown: buttonsNotes },
    });

storiesOf('lit-form', module)
    .add('Decorating properties', () => {
        const rdfLiteralDecorator = {
            unwrap: value => value['@value'] || value,
            wrap: newValue => ({
                '@value': newValue,
            }),
        };

        const schemaImageDecorator = {
            unwrap: value => value['https://schema.org/contentUrl'],
            wrap: newValue => ({
                '@type': 'https://schema.org/ImageObject',
                'https://schema.org/contentUrl': newValue,
            }),
        };

        const jsonldContract = {
            fields: [
                {
                    property: 'https://schema.org/name',
                    title: 'Your name',
                    valueDecorator: rdfLiteralDecorator,
                },
                {
                    property: 'https://schema.org/age',
                    title: 'Your age',
                    valueDecorator: rdfLiteralDecorator,
                },
                {
                    property: 'https://schema.org/image',
                    title: 'Avatar URL',
                    valueDecorator: schemaImageDecorator,
                },
            ],
        };

        const jsonLd = {
            'https://schema.org/name': {
                '@value': 'John Doe',
            },
        };

        return html`
<lit-form
          contract="${jsonldContract}" 
          value="${defaultValue(jsonLd)}"
          submit-button-label="Register"
          on-submit="${onSubmit}"></lit-form>`;
    }, {
        notes: { markdown: fieldValueDecoratorNotes },
    });

storiesOf('lit-form', module)
    .add('Styling', () => {
        const jsonldContract = {
            fields: [
                {
                    property: 'name',
                    title: 'Your name',
                },
                {
                    property: 'age',
                    title: 'Your age',
                },
            ],
        };

        return html`
    <custom-style>
    <style>
        lit-form#styling {
            --lit-form-fieldset: {
                display: flex;
            };
            
            --lit-form-field: {
                flex: 1;
                padding-left: 10px;
                padding-right: 10px;    
            };
        }
    </style>
    </custom-style>

<lit-form id="styling"
          contract="${jsonldContract}" 
          submit-button-label="Register"
          on-submit="${onSubmit}"></lit-form>`;
    });

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
