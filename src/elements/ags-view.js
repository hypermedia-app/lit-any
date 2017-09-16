import { render } from 'lit-html/lib/lit-extended';
import { PropertyAccessors } from '@polymer/polymer/lib/mixins/property-accessors';
import { html } from 'lit-html';
import { ViewTemplates } from '../template-registry';

function recurseTemplates(agsView, root) {
    return (value) => {
        let templateResult;
        const template = ViewTemplates.getTemplate(
            agsView.value,
            agsView.templateScope,
        );

        if (template) {
            if (root && template.name) {
                agsView.setAttribute('data-template', template.name);
            }

            templateResult = template.render(recurseTemplates(agsView, false), value);
        } else if (agsView.ignoreMissing) {
            templateResult = '';
        } else {
            templateResult = html`Template not found`;
            console.warn('Template not found for', agsView.value);
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
    }

    _propertiesChanged() {
        this._render();
    }

    _render() {
        if (this.value) {
            if (!this.shadowRoot) {
                this.attachShadow({ mode: 'open' });
            }

            const templateFunc = recurseTemplates(this, true);

            render(templateFunc(this.value), this.shadowRoot);
        }

        this.dispatchEvent(new CustomEvent('ags-render'));
    }
}

AgsView.createPropertiesForAttributes();

window.customElements.define('ags-view', AgsView);
