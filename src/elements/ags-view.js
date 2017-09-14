import { render } from 'lit-html/lib/lit-extended';
import { PropertyAccessors } from '@polymer/polymer/lib/mixins/property-accessors';
import { ViewTemplates } from '../template-registry';

function recurseTemplates(agsView, root) {
    return (value) => {
        let templateResult;
        const template = ViewTemplates.getTemplate(
            agsView.object,
            agsView.predicate,
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
            templateResult = 'Template not found';
            console.warn('Template not found for', agsView.object);
        }


        return templateResult;
    };
}

export default class AgsView extends PropertyAccessors(HTMLElement) {
    constructor() {
        super();

        this.predicate = null;
        this.templateScope = null;
        this.object = null;
        this.ignoreMissing = false;
        this.hasBeenRendered = false;
    }

    static get observedAttributes() {
        return [
            'object',
            'predicate',
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
        if (this.object) {
            if (!this.shadowRoot) {
                this.attachShadow({ mode: 'open' });
            }

            const templateFunc = recurseTemplates(this, true);

            render(templateFunc(this.object), this.shadowRoot);
        }

        this.dispatchEvent(new CustomEvent('render'));
    }
}

AgsView.createPropertiesForAttributes();

window.customElements.define('ags-view', AgsView);
