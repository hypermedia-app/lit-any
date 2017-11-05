import { render as litRender } from 'lit-html/lib/lit-extended';
import { html } from 'lit-html';
import LitAnyBase from './lit-any-base';

function hasAnythingToRender(contract) {
    return !!contract.title;
}

export default class LitForm extends LitAnyBase {
    constructor() {
        super();

        this.contract = null;
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
            <form>
                ${hasAnythingToRender(this.contract) ? this.__fieldsetTemplate() : ''}
            </form>`;
    }

    __fieldsetTemplate() {
        return html`<fieldset><legend>${this.contract.title}</legend></fieldset>`;
    }
}

LitForm.createPropertiesForAttributes();

window.customElements.define('lit-form', LitForm);

/**
 * Uber element `<ags-form>`
 *
 * @demo ../demo/fp-category-page-demo.html
 *

@template(`<fieldset>
    <legend hidden$="[[!contract.title]]">[[contract.title]]</legend>
    <template is="dom-repeat" items="[[contract.body]]">
        <label>
            [[item.title]]
            <ags-field property="[[item.property]]"
                       range="[[item.range]]"
                       required="[[item.required]]"
                       on-value-changed="_fieldValueChanged"></ags-field>
        </label>
    </template>
</fieldset>`)

export class AgsForm {

    @notify
    value: Object = null;

    contract: IContract;

    _fieldValueChanged(e) {
        if(!e.detail.value) return;

        const value = this.value || {};

        value[e.model.item.property] = [{
            '@value': e.detail.value
        }];

        this.set('value', value);
    }
}
*/
