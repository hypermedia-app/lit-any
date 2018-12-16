import { md, sample } from '../markdown';

export default function notes(view) {
    return md`# Nesting views
    
## Example

${sample(view)}

## Nesting \`<lit-view>\` elements

As an alternative to using the recursive \`render\` function it is possible to simply nest the \`<lit-view>\`
elements in the partial templates.

---js
import { html } from 'lit-html'; 
import moment from 'moment'; 
import Registry from 'lit-any/views';

Registry.default
    .when
    .valueMatches(v => v.type === 'Person')
    .renders((render, person) => 
        html\`Hello, my name is $\{person.fullName}. 
             I was born <lit-view value=$\{person.birthDate}></lit-view>\`);

Registry.default
    .when
    .valueMatches(v => v instanceof Date || Date.parse(value))
    .renders((_, date) => html\`$\{moment(date).fromNow()}\`);
---

The difference this is that each \`<lit-view>\` element creates a [Shadow Root][sroot] or its content, which
may be useful when there is desire to isolate portions of the generated HTML.

[sroot]: https://www.webcomponents.org/specs#the-shadow-dom-specification`;
}
