import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';

export function textbox({
    type = 'single line',
} = { }) {
    return async (f, id, v, set) => {
        if (type === 'multi line') {
            await import('@vaadin/vaadin-text-field/vaadin-text-area');
            return html`<vaadin-text-area 
                            label="${f.title}"
                            type="${type}"
                            .value="${v}"
                            ?required="${f.required}"
                            auto-validate
                            @value-changed="${e => set(e.target.value)}" ></vaadin-text-area>`;
        }

        await import('@vaadin/vaadin-text-field/vaadin-text-field');
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
    return async (f, id, v, set) => {
        await import('@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu');
        await import('@vaadin/vaadin-list-box/vaadin-list-box');
        await import('@vaadin/vaadin-item/vaadin-item');

        let options = items;
        if (typeof items === 'function') {
            options = items(f);
        }

        if (options.then) {
            throw new Error('Promise is not supported with vaadin-dropdown-menu');
        }

        function renderItem(option) {
            return html`<vaadin-item value="${option.value}">${option.label}</vaadin-item>`;
        }

        return html`<vaadin-dropdown-menu label="${f.title}" 
                                         @value-changed="${e => set(e.target.value)}"
                                         ?required="${f.required}"
                                         value="${v}">
    <template>
        <vaadin-list-box>${repeat(options, renderItem)}</vaadin-list-box>
    </template>
</vaadin-dropdown-menu>`;
    };
}

export async function button({
    label, onClick,
}) {
    await import('@vaadin/vaadin-button/vaadin-button');
    return html`<vaadin-button @click="${onClick}">${label}</vaadin-button>`;
}
