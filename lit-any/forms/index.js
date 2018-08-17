import FormTemplateRegistry from './TemplateRegistry';
import FieldTemplateSelectorBuilder from './TemplateSelectorBuilder';
import createRegistry from '../template-registry/TemplateRegistryFactory';

const fieldTemplates = {};

const FieldTemplates = {
    default: createRegistry(FormTemplateRegistry, fieldTemplates, FieldTemplateSelectorBuilder, ''),
    byName: name =>
        createRegistry(FormTemplateRegistry, fieldTemplates, FieldTemplateSelectorBuilder, name),
};

export default FieldTemplates;
