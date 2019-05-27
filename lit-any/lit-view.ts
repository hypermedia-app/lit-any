import { LitElement, property, TemplateResult } from 'lit-element'
import { html } from 'lit-html'
import render from './render'
import ViewTemplates from './views'

export default class LitView extends LitElement {
    @property({ type: Object, attribute: false })
    public value: unknown = null

    @property({ type: String, attribute: 'template-scope' })
    public templateScope = ''

    @property({ type: Boolean, attribute: 'ignore-missing' })
    public ignoreMissing = false

    @property({ type: String, attribute: 'template-registry' })
    public templateRegistry = ''

    public render(): TemplateResult {
        if (this.value) {
            return render(
                ViewTemplates.byName(this.templateRegistry),
                { value: this.value, scope: this.templateScope },
                this.ignoreMissing,
            )
        }

        return html``
    }
}

window.customElements.define('lit-view', LitView)
