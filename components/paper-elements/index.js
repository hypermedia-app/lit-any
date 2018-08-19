import { html } from 'lit-html/lib/lit-extended';
import { repeat } from 'lit-html/lib/repeat';
import { until } from 'lit-html/lib/until';

export function textbox({
    type = 'single line',
} = { }) {
    return (f, id, v, set) => {
        if (type === 'multi line') {
            return html`<paper-textarea 
                            label="${f.title}"
                            value="${v}"
                            required?="${f.required}"
                            auto-validate
                            on-value-changed="${e => set(e.target.value)}" ></paper-textarea>`;
        }

        return html`<paper-input 
                        label="${f.title}"
                        type="text"
                        value="${v}"
                        required?="${f.required}"
                        auto-validate
                        on-value-changed="${e => set(e.target.value)}" ></paper-input>`;
    };
}

export function dropdown({
    items = [],
} = {}) {
    return (f, id, v, set) => {
        function setValue(e) {
            e.target.validate();
            return set(e.target.querySelector('paper-listbox').selected);
        }

        let options = items;
        if (typeof items === 'function') {
            options = items(f);
        }

        if (!options.then) {
            options = Promise.resolve(options);
        }

        return html`<paper-dropdown-menu label="${f.title}" 
                                         no-animations?="${!window.KeyframeEffect}"
                                         on-value-changed="${setValue}"
                                         required?="${f.required}">
  <paper-listbox slot="dropdown-content" attr-for-selected="value" selected="${v}">
    ${options.then(resolved => html`${repeat(resolved, option => html`<paper-item value="${option.value}">${option.label}</paper-item>`)}`)}
  </paper-listbox>
</paper-dropdown-menu>`;
    };
}

export function button({
    label, onClick,
}) {
    return html`<paper-button on-tap="${onClick}">${label}</paper-button>`;
}
