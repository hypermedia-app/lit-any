import TemplateSelector from './TemplateSelector';

export default class TemplateSelectorBuilder {
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
