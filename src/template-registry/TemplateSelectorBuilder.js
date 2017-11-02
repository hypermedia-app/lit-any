import TemplateSelector from './TemplateSelector';

export default class TemplateSelectorBuilder {
    constructor(registry) {
        this._registry = registry;
        this._selector = new TemplateSelector();
    }

    value(valueMatcher) {
        this._selector._matchers.push(constraint => valueMatcher(constraint.value));

        return this;
    }

    scope(scopeMatcher) {
        if (typeof scopeMatcher === 'string') {
            return this.scope(s => s === scopeMatcher);
        }

        this._selector._matchers.push(constraint => scopeMatcher(constraint.scope));

        return this;
    }

    renders(fn) {
        this._registry.push(this._selector, fn);
        return this._registry;
    }
}
