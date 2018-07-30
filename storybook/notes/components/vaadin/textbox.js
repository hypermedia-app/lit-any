import { html } from 'lit-html/lib/lit-extended';
import { md, codeblock } from '../..';

export default function notes(field) {
    return html`${md(`
# Vaadin components

## Text field

The basic input which presents a \`<vaadin-text-field>\` or \`<vaadin-text-area>\`

### How it renders`)}

<br>${field}<br>

${md(`### Usage

${codeblock('js')}
import { textbox } from '@lit-any/components-vaadin';
import { FieldTemplates } from 'lit-any;

FieldTemplates.default
    .when(f => f.type === 'string')
    .renders(textbox(options));
${codeblock()}
    
### Options

| Name | expected values | default value |
|--|--|
| **type** | \`'single line'\`, \`'multi line'\` | \`'single line'\` |

`)}`;
}
