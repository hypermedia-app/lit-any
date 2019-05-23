import { md, sample } from '../markdown';

export default function notes(view) {
    return md`# Optional parameters in child views
    
## Example

${sample(view)}

## Passing parameters to child view

The render callback can use a fourth parameter which contains one-time parameters objects. It is passed to the recursive
call to \`render\`. To continue pushing it deeper, it has to be explicitly forwarded by each nested view call.

If missing, an empty object will be substituted.

In the example below the top render function provides a moment date format string to be used for date formatting. 

---js
import { html } from 'lit-html'; 
import moment from 'moment'; 
import Registry from '@lit-any/lit-any/views';

Registry.default
    .when
    .valueMatches(value => value.type === 'Person')
    .renders((person, render) => {
        const params = {
            format: 'LL',
        };

        return html\`Hello, my name is $\{person.fullName}. 
                    I was born on $\{render(person.birthDate, params)}\`;
    });

Registry.default
    .when
    .valueMatches(v => v instanceof Date || Date.parse(value))
    .renders((date, next, scope, params) => html\`$\{moment(date).format(params.format)}\`);
---

Note that the \`params\` argument is placed second, where the scope typically resides. If the scope is also used, the
call would be changed to \`render(person.birthDate, 'scope', params)\`.

[sroot]: https://www.webcomponents.org/specs#the-shadow-dom-specification`;
}
