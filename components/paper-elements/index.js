import { html } from 'lit-html/lib/lit-extended';

export function textbox({
    type = 'single line',
    required = false,
} = { }) {
    return (f, id, v, set) => {
        if (type === 'multi line') {
            return html`<paper-textarea 
                            label="${f.title}"
                            type="${type}"
                            value="${v}"
                            required?="${required}"
                            auto-validate
                            on-value-changed="${e => set(e.target.value)}" >`;
        }

        return html`<paper-input 
                        label="${f.title}"
                        type="${type}"
                        value="${v}"
                        required?="${required}"
                        auto-validate
                        on-value-changed="${e => set(e.target.value)}" >`;
    };
}
