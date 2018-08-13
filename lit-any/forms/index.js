import '../elements/lit-form';
import FormTemplateRegistry from './TemplateRegistry';
import FieldTemplateSelectorBuilder from './TemplateSelectorBuilder';

const fieldTemplates = {};
const getTemplate = (map, builder, name) => {
    if (!map[name]) {
        // eslint-disable-next-line no-param-reassign
        map[name] = new FormTemplateRegistry(builder, name || 'default');
    }

    return map[name];
};

const FieldTemplates = {
    default: getTemplate(fieldTemplates, FieldTemplateSelectorBuilder, ''),
    byName: name => getTemplate(fieldTemplates, FieldTemplateSelectorBuilder, name),
};

export default FieldTemplates;
