import TemplateRegistry from './template-registry';
import { FieldTemplateSelectorBuilder, ViewTemplateSelectorBuilder } from './TemplateSelectorBuilder';

const viewTemplates = {};
const fieldTemplates = {};

const getTemplate = (map, builder, name) => {
    if (!map[name]) {
        // eslint-disable-next-line no-param-reassign
        map[name] = new TemplateRegistry(builder, name || 'default');
    }

    return map[name];
};

export const ViewTemplates = {
    default: getTemplate(viewTemplates, ViewTemplateSelectorBuilder, ''),
    byName: name => getTemplate(viewTemplates, ViewTemplateSelectorBuilder, name),
};
export const FieldTemplates = {
    default: getTemplate(fieldTemplates, FieldTemplateSelectorBuilder, ''),
    byName: name => getTemplate(fieldTemplates, FieldTemplateSelectorBuilder, name),
};
