import { md, sample } from '../markdown';

export default function notes(view) {
    return md`# Nesting views
    
## Example

${sample(view)}

## Using \`render\` function
    
The whole point of defining partial view is to decompose the rendered markup into smaller chunks which can
be independently declared and eventually combined at run time to build UI for entire graphs of objects.

For this purpose, the template builder's \`renders\` callback takes a parameter which can be used to inject
a partial and inject it in the desired location within the template.

Consider these templates, where the first one delegates the decision how to render the person's \`birthDate\`
property. It will effectively be rendered by the second partial. 

--- js
import { html } from 'lit-html'; 
import moment from 'moment'; 
import Registry from 'lit-any/views';

Registry.default
    .when
    .valueMatches(v => v.type === 'Person')
    .renders((render, person) => 
        html\`Hello, my name is $\{person.fullName}. 
             I was born $\{render(person.birthDate)}\`);

Registry.default
    .when
    .valueMatches(v => v instanceof Date || Date.parse(value))
    .renders((_, date) => html\`$\{moment(date).fromNow()}\`);
--- 

This feature lets nested partial depend on the actual value of the \`birthDate\` property without the need
for explicit logic within the calling template.

## Note on Shadow DOM

All output rendered under a single \`lit-view\` will be inserted into a single [shadow root][sroot]. Shall the
need arise to isolate part of lit-any's renderings, actual [view elements can be nested][nest-view] instead 
to produce an equivalent result.

[sroot]: https://www.webcomponents.org/specs#the-shadow-dom-specification
[nest-view]: ?selectedKind=lit-view/nesting&selectedStory=using%20view%20element`;
}
