import FieldTemplateSelector from './TemplateSelector';
import TemplateSelectorBuilder from '../template-registry/TemplateSelectorBuilder';

export default class FieldTemplateSelectorBuilder extends TemplateSelectorBuilder {
    fieldMatches(fieldMatchFunc) {
        this._selector._matchers.push(constraint => fieldMatchFunc(constraint.field));

        return this;
    }

    // eslint-disable-next-line class-methods-use-this
    _createSelector() {
        return new FieldTemplateSelector();
    }

    rendersComponent(component) {
        if (!this._registry.components) {
            throw new Error('No component set configured');
        }

        return this.renders((...args) => {
            const componentFunc = this._registry.components[component.name]
                || this._registry.components.textbox;

            return componentFunc(component.options).call(null, ...args);
        });
    }
}
