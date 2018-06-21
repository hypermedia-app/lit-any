import { html, render as litRender } from 'lit-html/lib/lit-extended';
import LitAnyBase from './lit-any-base';
import contract from './contract-helpers';
import { FieldTemplates } from '../template-registry';

function onSubmit(e) {
    this.submit();
    e.preventDefault();
    return false;
}

export default class LitForm extends LitAnyBase {
    constructor() {
        super();

        this.contract = null;
        this.noLabels = false;
        this.value = {};
        this.submitButtonLabel = 'Submit';
        this.noSubmitButton = false;
        this.resetButtonLabel = 'Reset';
        this.noResetButton = false;
    }

    get form() {
        return this.shadowRoot.querySelector('form');
    }

    static get observedAttributes() {
        return [
            'value',
            'contract',
            'no-labels',
            'template-registry',
            'submit-button-label',
            'no-submit-button',
            'reset-button-label',
            'no-reset-button',
        ];
    }

    submit() {
        this.dispatchEvent(new CustomEvent('submit', {
            detail: {
                value: this.value,
            },
        }));
    }

    reset() {
        this._render();
        this.value = {};
        this._render();
    }

    _render() {
        if (this.contract) {
            if (!this.shadowRoot) {
                this.attachShadow({ mode: 'open' });
            }

            litRender(this.__formTemplate(), this.shadowRoot);

            this.dispatchEvent(new CustomEvent('render'));
        }
    }

    __formTemplate() {
        return html`
            <form action$="${this.contract.target}" 
                 method$="${this.contract.method}" 
                 on-submit="${onSubmit.bind(this)}">
                ${contract.hasAnythingToRender(this.contract) ? this.__fieldsetTemplate() : ''}
                
                ${this.noSubmitButton ? '' : this.__submitButtonTemplate()}
                ${this.noResetButton ? '' : this.__resetButtonTemplate()}
            </form>`;
    }

    __submitButtonTemplate() {
        return html`<button type="submit">${this.submitButtonLabel}</button>`;
    }

    __resetButtonTemplate() {
        return html`<input type="button" value="${this.resetButtonLabel}" on-click="${this.reset.bind(this)}">`;
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
            fieldLabel = html`<label for$="${fieldId}">${field.title || field.property}</label>`;
        }

        return html`<div class="field">
                        ${fieldLabel}
                        ${this.__fieldTemplate(field, fieldId)}
                    </div>`;
    }

    __fieldTemplate(field, fieldId) {
        const setter = (newValue) => {
            this.value[field.property] = newValue;
        };

        const fieldTemplate = FieldTemplates.byName(this.templateRegistry).getTemplate({ field });
        const fieldValue = this.value[field.property] || null;

        if (fieldTemplate === null) {
            console.warn('Could not find template for field. Rendering fallback input. Field was:', field);
            return html`<input id$="${fieldId}" class="fallback" on-input="${e => setter(e.target.value)}" value="${fieldValue || ''}">`;
        }

        return fieldTemplate.render(field, fieldId, fieldValue, setter);
    }

    // eslint-disable-next-line class-methods-use-this
    __fieldsetHeading(currentContract) {
        if (!currentContract.title) {
            return html``;
        }

        return html`<legend>${currentContract.title}</legend>`;
    }

    static typeForProperty(property) {
        switch (property) {
            case 'noSubmitButton':
            case 'noLabels':
                return Boolean;
            default:
                return undefined;
        }
    }
}

LitForm.createPropertiesForAttributes();

window.customElements.define('lit-form', LitForm);
