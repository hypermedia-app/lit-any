import { html } from 'lit-html/lib/lit-extended';
import { directive } from 'lit-html';
import { storiesOf } from '@storybook/polymer/dist/client/index';
import { select } from '@storybook/addon-knobs';
import { FieldTemplates } from '../src';
import { defaultValue, submitButton, contract, noSubmitButton } from './knobs';
import onSubmit from './helpers/submit-handler';
import submitNotes from './notes/lit-form/submitting.md';
import fallbackNotes from './notes/lit-form/fallback-input.md';
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
    .add('Submitting form', () => {
        const c = {
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

        return html`
<lit-form ref="${directive(getForm)}"
          contract="${contract(c)}" 
          noSubmitButton="${noSubmitButton()}"
          submitButtonLabel=${submitButton('Submit')}
          on-submit="${onSubmit}"></lit-form>

<button on-click="${() => form.submit()}">Submit from the outside</button>`;
    }, {
        notes: { markdown: submitNotes },
    });

storiesOf('lit-form', module)
    .add('Customizing model get/set', () => {
        const rdfLiteralDecorator = {
            get: (field, model) => {
                if (model && model[field.property]) {
                    return model[field.property]['@value'] || '';
                }

                return '';
            },
            set: (model, property, newValue) => {
                model[property] = model[property] || {};

                model[property]['@value'] = newValue;
            },
        };

        const schemaImageDecorator = {
            get: (field, model) => {
                if (model && model[field.property]) {
                    return model[field.property]['https://schema.org/contentUrl'] || '';
                }

                return '';
            },
            set: (model, property, newValue) => {
                model[property] = model[property] || {};

                model[property]['https://schema.org/contentUrl'] = newValue;
                model[property]['@type'] = 'https://schema.org/ImageObject';
            },
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
