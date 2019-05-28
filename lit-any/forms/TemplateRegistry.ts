import TemplateRegistry from '../template-registry';
import * as fallbackComponents from './FallbackComponents';

export default class FormTemplateRegistry extends TemplateRegistry {
    constructor(Builder, name) {
        super(Builder, name);
        this.components = fallbackComponents;
    }

    useComponents(components) {
        this.components = components || fallbackComponents;
        return this;
    }
}
