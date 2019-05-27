import { html, TemplateResult } from 'lit-html'
import TemplateRegistry from '../template-registry'

interface Params { [key: string]: unknown }
type renderFunc = (value: unknown, scope?: string) => TemplateResult

function recurseTemplates(
    registry: TemplateRegistry,
    ignoreMissing: boolean,
    inheritedScope: string | null
): renderFunc {
    return (
        value: unknown,
        currentScope?: Params | string,
        requestedParams?: Params
    ): TemplateResult => {
        let templateResult
        let scope
        let params = requestedParams
        if (typeof currentScope !== 'string') {
            scope = inheritedScope
            params = currentScope
        } else {
            scope = currentScope || inheritedScope
        }
        const template = registry.getTemplate({
            value,
            scope,
        })

        if (template) {
            const nextLevel = recurseTemplates(registry, ignoreMissing, scope)

            templateResult = html`${template.render(value, nextLevel, scope, params || {})}`
        } else if (ignoreMissing) {
            templateResult = ''
        } else {
            templateResult = html`Template not found`
            console.warn(`Template not found in registry '${registry.name}' for value`, value)
        }

        return templateResult
    }
}

export default function view(
    registry: TemplateRegistry,
    what: { value: unknown; scope?: string },
    ignoreMissing: boolean
) {
    const templateFunc = recurseTemplates(registry, ignoreMissing, null)

    return templateFunc(what.value, what.scope)
}
