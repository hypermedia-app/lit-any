import { html } from 'lit-html/lib/lit-extended';
import md from '../markdown';

export default function notes(view) {
    const heading = md`# Basic usage`;

    const explanation = md`## How it works

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
import { ViewTemplates } from 'lit-any';

ViewTemplates.default.when
    .valueMatches(v => v.type === 'Person')
    .renders((_, person) =>  html\`Hello, my name is $\{person.fullName}\`);
--- 

The \`valueMatches\` function accepts a callback which should return \`true\` if the value is something to be
rendered.

The function passed to \`renders\` takes the rendered object as parameter and must return [lit-html's][html] 
template string.

[html]: https://polymer.github.io/lit-html/guide/#lit-html-templates`;

    return html`
${heading} 

<br> ${view} <br>

<hr>

${explanation}`;
}
