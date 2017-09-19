import { render } from 'lit-html/lib/lit-extended';
import { PropertyAccessors } from '@polymer/polymer/lib/mixins/property-accessors';
import { html } from 'lit-html';

class TemplateSelector {
    constructor() {
        this.name = '';
        this._matchers = [];
    }

    matches(...rest) {
        return this._matchers.every(matcher => matcher.apply(matcher, rest));
    }
}

class TemplateSelectorBuilder {
    constructor(registry) {
        this._registry = registry;
        this._selector = new TemplateSelector();
    }

    value(valueMatcher) {
        this._selector._matchers.push(v => valueMatcher(v));

        return this;
    }

    scope(scopeMatcher) {
        this._selector._matchers.push((v, p, s) => scopeMatcher(s));

        return this;
    }

    renders(fn) {
        this._registry.push(this._selector, fn);
        return this._registry;
    }
}

class TemplateRegistry {
    constructor() {
        this._templates = [];
    }

    get count() {
        return this._templates.length;
    }

    /**
     *
     * @returns {TemplateSelectorBuilder}
     */
    get when() {
        return new TemplateSelectorBuilder(this);
    }

    getTemplate(value, scope) {
        const selectedTemplate = this._templates.find(template => template.selector.matches(value, scope));

        return {
            render: selectedTemplate.templateFunc,
            name: selectedTemplate.name || null
        };
    }

    push(selector, templateFuncOrResult, name) {
        let templateFunc = templateFuncOrResult;

        if (typeof templateFunc !== 'function') {
            templateFunc = () => templateFuncOrResult;
        }

        this._templates.push({
            selector,
            templateFunc,
            name
        });
    }
}

const ViewTemplates = new TemplateRegistry();
const FormTemplates = new TemplateRegistry();

function recurseTemplates(agsView, root) {
    return value => {
        let templateResult;
        const template = ViewTemplates.getTemplate(agsView.value, agsView.templateScope);

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

class AgsView extends PropertyAccessors(HTMLElement) {
    constructor() {
        super();

        this.templateScope = null;
        this.value = null;
        this.ignoreMissing = false;
    }

    static get observedAttributes() {
        return ['value', 'templateScope', 'ignoreMissing'];
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

export { ViewTemplates, FormTemplates };
//# sourceMappingURL=augeas.js.map
