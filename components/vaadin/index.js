import { html } from 'lit-html';
import { repeat } from 'lit-html/lib/repeat';
import { until } from 'lit-html/lib/until';

export function textbox({
    type = 'single line',
} = { }) {
    return (f, id, v, set) => {
        if (type === 'multi line') {
            return html`<vaadin-text-area 
                            label="${f.title}"
                            type="${type}"
                            .value="${v}"
                            ?required="${f.required}"
                            auto-validate
                            @value-changed="${e => set(e.target.value)}" ></vaadin-text-area>`;
        }

        return html`<vaadin-text-field 
                        label="${f.title}"
                        type="${type}"
                        .value="${v}"
                        ?required="${f.required}"
                        auto-validate
                        @value-changed="${e => set(e.target.value)}"></vaadin-text-field>`;
    };
}

export function dropdown({
    items = [],
} = {}) {
    return (f, id, v, set) => {
        let options = items;
        if (typeof items === 'function') {
            options = items(f);
        }

        if (!options.then) {
            options = Promise.resolve(options);
        }

        return html`<vaadin-dropdown-menu label="${f.title}" 
                                         @value-changed="${e => set(e.target.value)}"
                                         ?required="${f.required}"
                                         value="${v}">
  <template>
    <vaadin-list-box>
      ${until(options.then(resolved => html`${repeat(resolved, option => html`<vaadin-item value="${option.value}" label="${option.label}"></vaadin-item>`)}`), '')}
    </vaadin-list-box>
  </template>
</vaadin-dropdown-menu>`;
    };
}

export function button({
    label, onClick,
}) {
    return html`<vaadin-button on-click="${onClick}">${label}</vaadin-button>`;
}
