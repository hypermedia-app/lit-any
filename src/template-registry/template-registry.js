import {TemplateResult} from 'lit-html';
import TemplateSelector from "./TemplateSelector";

export class TemplateRegistry {

    constructor() {
        this._selectors = [];
    }

    get count() {
        return this._selectors.length;
    }

    /**
     *
     * @returns {TemplateSelectorBuilder}
     */
    get when() {
        return new TemplateSelectorBuilder(this);
    }

    getTemplate(value, predicate, scope) {
        return this._selectors.find(selector => {
            return selector.matches(value, predicate, scope);
        });
    }

    push(selector) {
        this._selectors.push(selector);
    }
}

class TemplateSelectorBuilder {

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
        this._registry.push(this._selector);
        return this._registry;
    }
}
