export default class TemplateSelector {
    constructor() {
        this.name = '';
        this._matchers = [];
    }

    matches(criteria) {
        if (this.shouldMatch(criteria) === false) {
            console.warn('Cannot render view for', criteria);
            return false;
        }

        return this._matchers.every(matcher => matcher.call(matcher, criteria));
    }

    // eslint-disable-next-line class-methods-use-this
    shouldMatch() {
        return true;
    }
}
