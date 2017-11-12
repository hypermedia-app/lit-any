import { html } from 'lit-html';
import { render as litRender } from 'lit-html/lib/lit-extended';
import { ViewTemplates } from '../template-registry';

function recurseTemplates(ignoreMissing, inheritedScope) {
    return (value, currentScope) => {
        let templateResult;
        const scope = currentScope || inheritedScope;
        const template = ViewTemplates.getTemplate({
            value,
            scope,
        });

        if (template) {
            const nextLevel = recurseTemplates(ignoreMissing, scope);
            templateResult = template.render(nextLevel, value, scope);
        } else if (ignoreMissing) {
            templateResult = '';
        } else {
            templateResult = html`Template not found`;
            console.warn('Template not found for', value);
        }

        return templateResult;
    };
}

export default function view(what, where) {
    const templateFunc = recurseTemplates(false, null);

    litRender(templateFunc(what.value, what.scope), where);
}
