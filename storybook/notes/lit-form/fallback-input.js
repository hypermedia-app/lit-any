import { codeblock, md } from '../index';
import { html } from 'lit-html/lib/lit-extended';

export default function notes(example) {
    const head = md`# Fallback field

Bare \`lit-any\` library does not come with any field templates for the \`<lit-form>\` element. And so, in case
when a field type is not something that the form knows how to present, a plain HTML \`<input>\` will be shown.`;

    const catchAll = md`## Catch all field template

Alternatively, it is possible declare a template without any restrictions, which means it will match any
field given. 

${codeblock('js')}
import { html } from 'lit-html'
import { FieldTemplates } from 'lit-any';

FieldTemplates.default.when
    .fieldMatches(() => true)
    .renders((field, id, value, set) => {
        html\`<paper-input id=$\{id} 
                 label=$\{field.title}
                 value=$\{value} 
                 on-change=$\{e => set(e.target.value)}></paper-input>\`;
    });
${codeblock()}

Note that field templates are selected in the same order they were registered, which means that a catch-all
template must be added last. Otherwise \`<lit-form>\` will use it for the entire form.`;

    return html`${head} <br>${example}<br> ${catchAll}`;
}
