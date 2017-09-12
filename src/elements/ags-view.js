import { html } from 'lit-html';
import { render } from 'lit-html/lib/lit-extended';
import { PropertyAccessors } from '@polymer/polymer/lib/mixins/property-accessors';
import { ViewTemplates } from '../template-registry';

const defaultWrapper = view => html`
<style>
:host {
    display: block;
    @apply(--object-view);
}
</style>
${view}`;

const notFoundTemplate = html`<div>Template not found</div>`;

function renderT(agsView) {
    return (value) => {
        const template = ViewTemplates.getTemplate(
            agsView.object,
            agsView.predicate,
            agsView.templateScope,
        );

        if (template) {
            return template.render(renderT(agsView), value);
        }

        return notFoundTemplate;
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
        let template;

        if (this.object) {
            if (!this.shadowRoot) {
                this.attachShadow({ mode: 'open' });
            }

            template = ViewTemplates.getTemplate(this.object, this.predicate, this.templateScope);
            let result;

            if (template) {
                if (template.name) {
                    this.setAttribute('data-template', template.name);
                }

                result = defaultWrapper(template.render(renderT(this), this.object));
            } else if (!this.ignoreMissing) {
                result = notFoundTemplate;

                console.warn('Template not found for', this.object);
            }

            render(result, this.shadowRoot);
        }

        this.dispatchEvent(new CustomEvent('render', {
            detail: {
                template,
            },
        }));
    }
}

AgsView.createPropertiesForAttributes();

window.customElements.define('ags-view', AgsView);
