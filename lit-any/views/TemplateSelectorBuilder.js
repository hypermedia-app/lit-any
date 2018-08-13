import TemplateSelectorBuilder from '../template-registry/TemplateSelectorBuilder';
import ViewTemplateSelector from './TemplateSelector';

export default class ViewTemplateSelectorBuilder extends TemplateSelectorBuilder {
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

