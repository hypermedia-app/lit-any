import { render as litRender } from 'lit-html/lib/lit-extended';
import { html } from 'lit-html';
import LitAnyBase from './lit-any-base';
import contract from './contract-helpers';
import render from '../render';

export default class LitForm extends LitAnyBase {
    constructor() {
        super();

        this.contract = null;
        this.value = {};
    }

    get form() {
        return this.shadowRoot.querySelector('form');
    }

    static get observedAttributes() {
        return [
            'contract',
        ];
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
        return html`<div class="field">${this.__fieldTemplate(field)}</div>`;
    }

    __fieldTemplate(field) {
        return render.field(field, this.value[field.property], (e) => {
            if (e.constructor === 'CustomEvent') {
                this.value[field.property] = e.detail.value;
            }

            this.value[field.property] = e.target.value;
        });
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
