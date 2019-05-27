import TemplateRegistry from '../template-registry'
import ViewTemplateSelectorBuilder from './TemplateSelectorBuilder'
import createRegistry from '../template-registry/TemplateRegistryFactory'

const viewTemplates = {}

const ViewTemplates = {
    default: createRegistry(TemplateRegistry, viewTemplates, ViewTemplateSelectorBuilder, ''),
    byName: (name: string) => createRegistry(
        TemplateRegistry,
        viewTemplates,
        ViewTemplateSelectorBuilder,
        name
    ),
}

export default ViewTemplates
