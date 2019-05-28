import { html } from 'lit-html'
import { repeat } from 'lit-html/directives/repeat'
import { until } from 'lit-html/directives/until'

export function textbox({
    type = 'single line',
} = { }) {
    return (f, id, v, set) => {
        if (type === 'multi line') {
            return html`<textarea id="${id}"
                                  @input="${e => set(e.target.value)}"
                                  ?required="${f.required}"
                                  value="${v || ''}"></textarea>`
        }

        return html`<input id="${id}"
                           type="text"
                           ?required="${f.required}"
                           @input="${e => set(e.target.value)}"
                           value="${v || ''}">`
    }
}

export function dropdown({
    items = [],
} = {}) {
    return (f, id, v, set) => {
        let options = items
        if (typeof items === 'function') {
            options = items(f)
        }

        if (!options.then) {
            options = Promise.resolve(options)
        }

        function renderOption(option) {
            return html`<option value="${option.value}" 
                                ?selected="${option.value === v}" 
                                label="${option.label}"></option>`
        }

        const optionElements = options.then(resolved => html`${repeat(resolved, renderOption)}`)

        return html`
<select id="${id}" @change="${e => set(e.target.value)}" ?required="${f.required}">
    ${until(optionElements, '')}
</select>`
    }
}

export function button({
    label, onClick,
}) {
    return html`<input type="button" value="${label}" @click="${onClick}">`
}
