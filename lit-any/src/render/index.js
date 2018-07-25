import { html } from 'lit-html';

function recurseTemplates(registry, ignoreMissing, inheritedScope) {
    return (value, currentScope) => {
        let templateResult;
        const scope = currentScope || inheritedScope;
        const template = registry.getTemplate({
            value,
            scope,
        });

        if (template) {
            const nextLevel = recurseTemplates(registry, ignoreMissing, scope);
            templateResult = template.render(nextLevel, value, scope);
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
