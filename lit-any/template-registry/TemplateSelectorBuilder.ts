import TemplateSelector from './TemplateSelector'

export default abstract class TemplateSelectorBuilder {
    protected _registry

    protected _selector

    constructor(registry) {
        this._registry = registry
        this._selector = this._createSelector()
    }

    public renders(fn) {
        this._registry.push(this._selector, fn)
        return this._registry
    }

    // eslint-disable-next-line class-methods-use-this
    protected abstract _createSelector(): TemplateSelector
}
