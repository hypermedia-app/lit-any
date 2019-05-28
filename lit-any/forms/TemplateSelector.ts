import TemplateSelector from '../template-registry/TemplateSelector';

export default class FieldTemplateSelector extends TemplateSelector {
    // eslint-disable-next-line class-methods-use-this
    shouldMatch(criteria) {
        return typeof criteria.field !== 'undefined'
            && criteria.field !== null
            && typeof criteria.field.property !== 'undefined'
            && criteria.field.property !== null;
    }
}
