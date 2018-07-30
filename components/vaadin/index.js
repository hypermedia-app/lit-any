import { html } from 'lit-html/lib/lit-extended';
import { repeat } from 'lit-html/lib/repeat';

export function textbox({
    type = 'single line',
} = { }) {
    return (f, id, v, set) => {
        if (type === 'multi line') {
            return html`<vaadin-text-area 
                            label="${f.title}"
                            type="${type}"
                            value="${v}"
                            required?="${f.required}"
                            auto-validate
                            on-value-changed="${e => set(e.target.value)}" ></vaadin-text-area>`;
        }

        return html`<vaadin-text-field 
                        label="${f.title}"
                        type="${type}"
                        value="${v}"
                        required?="${f.required}"
                        auto-validate
                        on-value-changed="${e => set(e.target.value)}"></vaadin-text-field>`;
    };
}

export function dropdown({
    items = [],
} = {}) {
    return async (f, id, v, set) => {
        let options = items;
        if (typeof items === 'function') {
            options = await items(f);
        }

        return html`<vaadin-dropdown-menu label="${f.title}" 
                                         on-value-changed="${e => set(e.target.value)}"
                                         required?="${f.required}"
                                         value="${v}">
  <template>
    <vaadin-list-box>
      ${repeat(options, option => `<vaadin-item value$="${option.value}" label$="${option.label}"></vaadin-item>`)}
    </vaadin-list-box>
  </template>
</vaadin-dropdown-menu>`;
    };
}
