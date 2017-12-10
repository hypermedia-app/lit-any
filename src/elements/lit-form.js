import { render as litRender } from 'lit-html/lib/lit-extended';
import { html } from 'lit-html';
import LitAnyBase from './lit-any-base';
import contract from './contract-helpers';
import { FieldTemplates } from '../template-registry';

export default class LitForm extends LitAnyBase {
    constructor() {
        super();

        this.contract = null;
        this.noLabels = false;
        this.value = {};
    }

    get form() {
        return this.shadowRoot.querySelector('form');
    }

    static get observedAttributes() {
        return [
            'contract',
            'no-labels',
        ];
    }

    static get properties() {
        return {
            noLabels: {
                type: Boolean,
            },
        };
    }

    _render() {
        if (this.contract) {
            if (!this.shadowRoot) {
                this.attachShadow({ mode: 'open' });
            }

            litRender(this.__formTemplate(), this.shadowRoot);

            this.dispatchEvent(new CustomEvent('ly-render'));
        }
    }

    __formTemplate() {
        return html`
            <form action$="${this.contract.target}" method$="${this.contract.method}">
                ${contract.hasAnythingToRender(this.contract) ? this.__fieldsetTemplate() : ''}
            </form>`;
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
        // eslint-disable-next-line no-debugger
        debugger;
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

        const fieldTemplate = FieldTemplates.getTemplate({ field });
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
}

LitForm.createPropertiesForAttributes();

window.customElements.define('lit-form', LitForm);
