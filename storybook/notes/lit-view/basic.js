import { md, sample } from '../markdown';

export default function notes(view) {
    return md`# Basic usage

${sample(view)}

## How it works

The \`<lit-view>\` element is used as a placeholder for displaying parts of a user interfaces. It is used simply
by setting the \`value\` property with the object to be displayed on the page.

--- html
<lit-view id="view"></lit-view>

<script>
  view.value = {
    type: 'Person',
    fullName: 'Louis Litt'  
  };
</script>
---  

How the value is displayed will be determined by matching the value with templates defined in the view
registry. Here's an example setup of a template which renders objects where \`object.type == 'Person'\`.

--- js
import { html } from 'lit-html/lib/extended';
import Registry from '@lit-any/lit-any/views';

Registry.default.when
    .valueMatches(v => v.type === 'Person')
    .renders(person =>  html\`Hello, my name is $\{person.fullName}\`);
--- 

The \`valueMatches\` function accepts a callback which should return \`true\` if the value is something to be
rendered.

The function passed to \`renders\` takes the rendered object as parameter and must return [lit-html's][html] 
template string.

[html]: https://polymer.github.io/lit-html/guide/#lit-html-templates`;
}
