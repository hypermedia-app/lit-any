import { html } from 'lit-html/lib/lit-extended';
import { repeat } from 'lit-html/lib/repeat';

export function textbox({
    type = 'single line',
} = { }) {
    return (f, id, v, set) => {
        if (type === 'multi line') {
            return html`<textarea id$="${id}" class="fallback" on-input="${e => set(e.target.value)}" value="${v || ''}"></textarea>`;
        }

        return html`<input id$="${id}" class="fallback" on-input="${e => set(e.target.value)}" value="${v || ''}">`;
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

        return html`<select id$="${id}" on-change="${e => set(e.target.value)}">
${repeat(options, option => html`<option value$="${option.value}" selected?="${option.value === v}" label$="${option.label}"></option>`)}
</select>`;
    };
}

export function button({
    label,
}) {
    return html`<button type="submit">${label}</button>`;
}
