import TemplateSelectorBuilder from '../template-registry/TemplateSelectorBuilder'
import ViewTemplateSelector from './TemplateSelector'
import TemplateSelector from '../template-registry/TemplateSelector'

export default class ViewTemplateSelectorBuilder extends TemplateSelectorBuilder {
    public valueMatches(valueMatcher) {
        this._selector._matchers.push(constraint => valueMatcher(constraint.value))

        return this
    }

    public scopeMatches(scopeMatcher) {
        if (typeof scopeMatcher === 'string') {
            return this.scopeMatches(s => s === scopeMatcher)
        }

        this._selector._matchers.push(constraint => scopeMatcher(constraint.scope))

        return this
    }

    // eslint-disable-next-line class-methods-use-this
    protected _createSelector(): TemplateSelector {
        return new ViewTemplateSelector()
    }
}
