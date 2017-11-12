import TemplateSelector from './TemplateSelector';

export class TemplateSelectorBuilder {
    constructor(registry) {
        this._registry = registry;
        this._selector = new TemplateSelector();
    }

    renders(fn) {
        this._registry.push(this._selector, fn);
        return this._registry;
    }
}

export class ViewTemplateSelectorBuilder extends TemplateSelectorBuilder {
    valueMatches(valueMatcher) {
        this._selector._matchers.push(constraint => valueMatcher(constraint.value));

        return this;
    }

    scopeMatches(scopeMatcher) {
        if (typeof scopeMatcher === 'string') {
            return this.scopeMatches(s => s === scopeMatcher);
        }

        this._selector._matchers.push(constraint => scopeMatcher(constraint.scope));

        return this;
    }
}

export class FieldTemplateSelectorBuilder extends TemplateSelectorBuilder {
    fieldMatches(fieldMatchFunc) {
        this._selector._matchers.push(constraint => fieldMatchFunc(constraint.field));

        return this;
    }
}
