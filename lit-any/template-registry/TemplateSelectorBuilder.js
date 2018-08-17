export default class TemplateSelectorBuilder {
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

