export default class TemplateSelector {
    public name = ''

    private _matchers = []

    public matches(criteria) {
        if (this.shouldMatch(criteria) === false) {
            console.warn('Cannot render view for', criteria)
            return false
        }

        return this._matchers.every(matcher => matcher.call(matcher, criteria))
    }

    // eslint-disable-next-line class-methods-use-this
    public shouldMatch(): boolean {
        return true
    }
}
