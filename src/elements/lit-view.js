import render from '../render';
import LitAnyBase from './lit-any-base';

export default class LitView extends LitAnyBase {
    constructor() {
        super();

        this.templateScope = null;
        this.value = null;
        this.ignoreMissing = false;
    }

    static get observedAttributes() {
        return [
            'value',
            'template-scope',
            'ignore-missing',
        ];
    }

    _render() {
        if (this.value && this.__connected) {
            if (!this.shadowRoot) {
                this.attachShadow({ mode: 'open' });
            }

            render.view({ value: this.value, scope: this.templateScope }, this.shadowRoot);

            this.dispatchEvent(new CustomEvent('ly-render'));
        }
    }

    _attributeToProperty(attribute, value, type) {
        if (attribute === 'ignore-missing') {
            super._attributeToProperty(attribute, value, Boolean);
        } else {
            super._attributeToProperty(attribute, value, type);
        }
    }
}

LitView.createPropertiesForAttributes();

window.customElements.define('lit-view', LitView);
