export default class TemplateSelector {
    constructor() {
        this.name = '';
        this._matchers = [];
    }

    matches(...rest) {
        return this._matchers.every(matcher => matcher.apply(matcher, rest));
    }
}
