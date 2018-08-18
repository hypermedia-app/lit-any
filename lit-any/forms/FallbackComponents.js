import { html } from 'lit-html/lib/lit-extended';
import { repeat } from 'lit-html/lib/repeat';

export function textbox({
    type = 'single line',
} = { }) {
    return (f, id, v, set) => {
        if (type === 'multi line') {
            return html`<textarea id$="${id}"
                                  on-input="${e => set(e.target.value)}"
                                  required?="${f.required}"
                                  value="${v || ''}"></textarea>`;
        }

        return html`<input id$="${id}"
                           type="text"
                           required?="${f.required}"
                           on-input="${e => set(e.target.value)}"
                           value="${v || ''}">`;
    };
}

export function dropdown({
    items = [],
} = {}) {
    return async (f, id, v, set) => {
        let options = items;
        if (typeof items === 'function') {
            options = items(f);
        }

        if (!options.then) {
            options = Promise.resolve(options);
        }

        return html`<select id$="${id}" on-change="${e => set(e.target.value)}" required?="${f.required}">
      ${options.then(resolved => html`${repeat(resolved, option => html`<option value$="${option.value}" selected?="${option.value === v}" label$="${option.label}"></option>`)}`)}
</select>`;
    };
}

export function button({
    label, onClick,
}) {
    return html`<input type="button" value="${label}" on-click="${onClick}">`;
}
