import { ViewTemplateSelector, FieldTemplateSelector } from './TemplateSelector';

export class TemplateSelectorBuilder {
    constructor(registry) {
        this._registry = registry;
        this._selector = this._createSelector();
    }

    renders(fn) {
        this._registry.push(this._selector, fn);
        return this._registry;
    }

    // eslint-disable-next-line class-methods-use-this
    _createSelector() {
        return null;
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

    // eslint-disable-next-line class-methods-use-this
    _createSelector() {
        return new ViewTemplateSelector();
    }
}

export class FieldTemplateSelectorBuilder extends TemplateSelectorBuilder {
    fieldMatches(fieldMatchFunc) {
        this._selector._matchers.push(constraint => fieldMatchFunc(constraint.field));

        return this;
    }

    // eslint-disable-next-line class-methods-use-this
    _createSelector() {
        return new FieldTemplateSelector();
    }
}
