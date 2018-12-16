import { LitElement } from '@polymer/lit-element';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import contract from './elements/contract-helpers';
import FieldTemplates from './forms';

function onSubmit(e) {
    this.submit();
    e.preventDefault();
    return false;
}

export default class LitForm extends LitElement {
    constructor() {
        super();

        this.contract = null;
        this.noLabels = false;
        this.value = {};
        this.submitButtonLabel = 'Submit';
        this.noSubmitButton = false;
        this.resetButtonLabel = 'Reset';
        this.noResetButton = false;
        this.templateRegistry = '';
    }

    get form() {
        return this.shadowRoot.querySelector('form');
    }

    static get properties() {
        return {
            contract: { type: Object, attribute: false },
            noLabels: { type: Boolean, attribute: 'no-labels', reflect: true },
            value: { type: Object, attribute: false },
            submitButtonLabel: { type: String, attribute: 'submit-button-label' },
            noSubmitButton: { type: Boolean, attribute: 'no-submit-button', reflect: true },
            resetButtonLabel: { type: String, attribute: 'reset-button-label' },
            noResetButton: { type: Boolean, attribute: 'no-reset-button', reflect: true },
            templateRegistry: { type: String, attribute: 'template-registry' },
        };
    }

    submit() {
        this.dispatchEvent(new CustomEvent('submit', {
            detail: {
                value: this.value,
                target: this.form.action,
                method: this.form.getAttribute('method') || this.form.method.toUpperCase(),
            },
        }));
    }

    async reset() {
        this.value = {};
        await this.requestUpdate();
    }

    render() {
        if (this.contract) {
            return this.__formTemplate();
        }

        return html``;
    }

    __formTemplate() {
        return html`<style>
                    ${this.__stylesheet()}
                </style>

            <form action="${ifDefined(this.contract.target)}"
                 method="${ifDefined(this.contract.method)}" 
                 @submit="${onSubmit.bind(this)}">
                ${contract.hasAnythingToRender(this.contract) ? this.__fieldsetTemplate() : ''}
                
                ${this.noSubmitButton ? '' : this.__submitButtonTemplate()}
                ${this.noResetButton ? '' : this.__resetButtonTemplate()}
            </form>`;
    }

    // eslint-disable-next-line class-methods-use-this
    __stylesheet() {
        return `:host {
                        display: block;
                    }
                
                    form {
                        @apply --lit-form-form;
                    }
                    
                    fieldset {
                        @apply --lit-form-fieldset;
                    }
                    
                    .field {
                        @apply --lit-form-field;
                    }`;
    }

    __submitButtonTemplate() {
        return FieldTemplates.byName(this.templateRegistry).components.button({
            label: this.submitButtonLabel,
            onClick: this.submit.bind(this),
        });
    }

    __resetButtonTemplate() {
        return FieldTemplates.byName(this.templateRegistry).components.button({
            label: this.resetButtonLabel,
            onClick: this.reset.bind(this),
        });
    }

    __fieldsetTemplate() {
        let fieldsArray = [];
        if (contract.fieldsAreIterable(this.contract)) {
            fieldsArray = this.contract.fields;
        }

        return html`
            <fieldset>
                ${this.__fieldsetHeading(this.contract)}
                
                ${fieldsArray.map(f => this.__fieldWrapperTemplate(f))}
            </fieldset>`;
    }

    __fieldWrapperTemplate(field) {
        const fieldId = field.property;

        let fieldLabel = html``;
        if (this.noLabels === false) {
            fieldLabel = html`<label for="${fieldId}">${field.title || field.property}</label>`;
        }

        return html`<div class="field">
                        ${fieldLabel}
                        ${this.__fieldTemplate(field, fieldId)}
                    </div>`;
    }

    __fieldTemplate(field, fieldId) {
        const setter = this.__createModelValueSetter(field);

        const fieldTemplate = FieldTemplates.byName(this.templateRegistry).getTemplate({ field });
        const fieldValue = this.__getPropertyValue(field, this.value);

        if (fieldTemplate === null) {
            const renderFunc = FieldTemplates.byName(this.templateRegistry).components.textbox();
            return renderFunc(field, fieldId, fieldValue, setter);
        }

        return fieldTemplate.render(field, fieldId, fieldValue, setter);
    }

    __createModelValueSetter(field) {
        return (fieldInput) => {
            let newValue = fieldInput;

            if (field.valueDecorator && typeof field.valueDecorator.wrap === 'function') {
                newValue = field.valueDecorator.wrap(newValue);
            }

            this.value[field.property] = newValue;
        };
    }

    // eslint-disable-next-line class-methods-use-this
    __getPropertyValue(field, model) {
        let value = model[field.property] || null;

        if (value && field.valueDecorator && typeof field.valueDecorator.unwrap === 'function') {
            value = field.valueDecorator.unwrap(value);
        }

        return value;
    }

    // eslint-disable-next-line class-methods-use-this
    __fieldsetHeading(currentContract) {
        if (!currentContract.title) {
            return html``;
        }

        return html`<legend>${currentContract.title}</legend>`;
    }
}

window.customElements.define('lit-form', LitForm);
