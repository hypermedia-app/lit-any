import { render } from 'lit-html/lib/lit-extended';
import { PropertyAccessors } from '@polymer/polymer/lib/mixins/property-accessors';
import { html } from 'lit-html';
import { ViewTemplates } from '../template-registry';

function recurseTemplates(agsView, root, inheritedScope) {
    return (value, currentScope) => {
        let templateResult;
        const scope = currentScope || inheritedScope;
        const template = ViewTemplates.getTemplate({
            value,
            scope,
        });

        if (template) {
            if (root && template.name) {
                agsView.setAttribute('data-template', template.name);
            }

            templateResult = template.render(recurseTemplates(agsView, false, scope), value, scope);
        } else if (agsView.ignoreMissing) {
            templateResult = '';
        } else {
            templateResult = html`Template not found`;
            console.warn('Template not found for', value);
        }

        return templateResult;
    };
}

export default class AgsView extends PropertyAccessors(HTMLElement) {
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
            'templateScope',
            'ignoreMissing',
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

            const templateFunc = recurseTemplates(this, true, this.templateScope);

            render(templateFunc(this.value), this.shadowRoot);

            this.dispatchEvent(new CustomEvent('ags-render'));
        }
    }
}

AgsView.createPropertiesForAttributes();

window.customElements.define('ags-view', AgsView);
