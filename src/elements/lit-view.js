import { html } from 'lit-html';
import render from '../render';
import LitAnyBase from './lit-any-base';
import { ViewTemplates } from '../template-registry';

export default class LitView extends LitAnyBase {
    constructor() {
        super();

        this.templateScope = null;
        this.value = null;
        this.ignoreMissing = false;
    }

    static get properties() {
        return {
            templateScope: String,
            templateRegistry: String,
            value: Object,
            ignoreMissing: Boolean,
        };
    }

    static get observedAttributes() {
        return [
            'template-scope',
            'ignore-missing',
            'template-registry',
        ];
    }

    // eslint-disable-next-line class-methods-use-this
    _render({
        value, templateScope, templateRegistry, ignoreMissing,
    }) {
        if (value) {
            return render(
                ViewTemplates.byName(templateRegistry),
                { value, scope: templateScope },
                ignoreMissing,
            );
        }

        return html``;
    }
}

window.customElements.define('lit-view', LitView);
