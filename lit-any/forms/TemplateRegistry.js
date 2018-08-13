import TemplateRegistry from '../template-registry';

export default class FormTemplateRegistry extends TemplateRegistry {
    useComponents(components) {
        this.components = components;
        return this;
    }
}
