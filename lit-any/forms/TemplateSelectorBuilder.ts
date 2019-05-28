import FieldTemplateSelector from './TemplateSelector'
import TemplateSelectorBuilder from '../template-registry/TemplateSelectorBuilder'

export default class FieldTemplateSelectorBuilder extends TemplateSelectorBuilder {
    fieldMatches(fieldMatchFunc) {
        this._selector._matchers.push(constraint => fieldMatchFunc(constraint.field))

        return this
    }

    // eslint-disable-next-line class-methods-use-this
    _createSelector() {
        return new FieldTemplateSelector()
    }

    rendersComponent(component) {
        return this.renders((...args) => {
            if (!this._registry.components) {
                throw new Error('No component set configured')
            }

            const componentFunc = this._registry.components[component.name] ||
                this._registry.components.textbox

            return componentFunc(component.options).call(null, ...args)
        })
    }
}
