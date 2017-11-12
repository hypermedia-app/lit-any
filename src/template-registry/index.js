import TemplateRegistry from './template-registry';
import { FieldTemplateSelectorBuilder, ViewTemplateSelectorBuilder } from './TemplateSelectorBuilder';

export const ViewTemplates = new TemplateRegistry(ViewTemplateSelectorBuilder);
export const FieldTemplates = new TemplateRegistry(FieldTemplateSelectorBuilder);
