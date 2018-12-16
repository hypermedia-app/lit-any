import md from '../markdown';

export default function notes(example) {
    return md`# Fallback field

Bare \`lit-any\` library does not come with any field templates for the \`<lit-form>\` element. And so, in case
when a field type is not something that the form knows how to present, a plain HTML \`<input>\` will be shown.

${example}

## Catch all field template

Alternatively, it is possible declare a template without any restrictions, which means it will match any
field given. 

--- js
import { html } from 'lit-html'
import Registry from 'lit-any/forms';

Registry.default.when
    .fieldMatches(() => true)
    .renders((field, id, value, set) => {
        html\`<paper-input id=$\{id} 
                 label=$\{field.title}
                 value=$\{value} 
                 @change=$\{e => set(e.target.value)}></paper-input>\`;
    });
--- 

Note that field templates are selected in the same order they were registered, which means that a catch-all
template must be added last. Otherwise \`<lit-form>\` will use it for the entire form.`;
}
