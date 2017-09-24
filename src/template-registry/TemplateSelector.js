export default class TemplateSelector {
    constructor() {
        this.name = '';
        this._matchers = [];
    }

    matches(criteria) {
        return this._matchers.every(matcher => matcher.call(matcher, criteria));
    }
}
