import { html } from 'lit-html';

function recurseTemplates(registry, ignoreMissing, inheritedScope) {
    return (value, currentScope, requestedParams) => {
        let templateResult;
        let scope;
        let params = requestedParams;
        if (typeof currentScope !== 'string') {
            scope = inheritedScope;
            params = currentScope;
        } else {
            scope = currentScope || inheritedScope;
        }
        const template = registry.getTemplate({
            value,
            scope,
        });

        if (template) {
            const nextLevel = recurseTemplates(registry, ignoreMissing, scope);

            templateResult = html`${template.render(value, nextLevel, scope, params || {})}`;
        } else if (ignoreMissing) {
            templateResult = '';
        } else {
            templateResult = html`Template not found`;
            console.warn(`Template not found in registry '${registry.name}' for value`, value);
        }

        return templateResult;
    };
}

export default function view(registry, what, ignoreMissing) {
    const templateFunc = recurseTemplates(registry, ignoreMissing, null);

    return templateFunc(what.value, what.scope);
}
