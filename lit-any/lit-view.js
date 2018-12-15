import { html } from 'lit-html';
import render from './render/index';
import LitAnyBase from './elements/lit-any-base';
import ViewTemplates from './views/index';

export default class LitView extends LitAnyBase {
    constructor() {
        super();

        this.templateScope = null;
        this.value = null;
        this.ignoreMissing = false;
    }

    static get properties() {
        return {
            templateScope: { type: String, attribute: 'template-scope' },
            templateRegistry: { type: String, attribute: 'template-registry' },
            value: { type: Object, attribute: false },
            ignoreMissing: { type: Boolean, attribute: 'ignore-missing' },
        };
    }

    render() {
        if (this.value) {
            return render(
                ViewTemplates.byName(this.templateRegistry),
                { value: this.value, scope: this.templateScope },
                this.ignoreMissing,
            );
        }

        return html``;
    }
}

window.customElements.define('lit-view', LitView);
