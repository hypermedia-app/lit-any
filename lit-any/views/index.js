import TemplateRegistry from '../template-registry';
import ViewTemplateSelectorBuilder from './TemplateSelectorBuilder';

const viewTemplates = {};

const getTemplate = (map, builder, name) => {
    if (!map[name]) {
        // eslint-disable-next-line no-param-reassign
        map[name] = new TemplateRegistry(builder, name || 'default');
    }

    return map[name];
};

const ViewTemplates = {
    default: getTemplate(viewTemplates, ViewTemplateSelectorBuilder, ''),
    byName: name => getTemplate(viewTemplates, ViewTemplateSelectorBuilder, name),
};

export default ViewTemplates;
