import { PropertyAccessors } from '@polymer/polymer/lib/mixins/property-accessors';
import render from '../render';

export default class LitView extends PropertyAccessors(HTMLElement) {
    constructor() {
        super();

        this.templateScope = null;
        this.value = null;
        this.ignoreMissing = false;

        this.__connected = false;
    }

    static get observedAttributes() {
        return [
            'value',
            'template-scope',
            'ignore-missing',
        ];
    }

    connectedCallback() {
        this._enableProperties();
        this.__connected = true;
        this._render();
    }

    disconnectedCallback() {
        this.__connected = false;
    }

    _propertiesChanged() {
        this._render();
    }

    _render() {
        if (this.value && this.__connected) {
            if (!this.shadowRoot) {
                this.attachShadow({ mode: 'open' });
            }

            render({ value: this.value, scope: this.templateScope }, this.shadowRoot);

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
