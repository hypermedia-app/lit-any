import { html } from 'lit-html/lib/lit-extended';

export function textbox() {
    return (f, id, v, set) =>
        html`<paper-input label="${f.title}" type="text" value="${v}" on-input="${e => set(e.target.value)}" >`;
}
