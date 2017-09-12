import TemplateSelector from "./TemplateSelector";

export class TemplateSelectorBuilder {

    constructor(registry) {
        this._registry = registry;
        this._selector = new TemplateSelector();
    }

    value(valueMatcher) {
        this._selector._matchers.push((v, p, o) => {
            return valueMatcher(v);
        });

        return this;
    }

    property(propertyMatcher) {
        this._selector._matchers.push((v, p, s) => {
            return propertyMatcher(p);
        });

        return this;
    }

    scope(scopeMatcher) {
        this._selector._matchers.push((v, p, s) => {
            return scopeMatcher(s);
        });

        return this;
    }

    renders(fn) {
        this._registry.push(this._selector, fn);
        return this._registry;
    }
}
