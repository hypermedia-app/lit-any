import TemplateSelector from '../template-registry/TemplateSelector';

export default class ViewTemplateSelector extends TemplateSelector {
    // eslint-disable-next-line class-methods-use-this
    shouldMatch(criteria) {
        return typeof criteria.value !== 'undefined' && criteria.value !== null;
    }
}
