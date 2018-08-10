import { html } from 'lit-html/lib/lit-extended';
import md from '../../markdown';

export default function notes(field) {
    return html`${md`
# Paper elements

## Text field

The basic input which presents a \`<paper-input>\` or \`<paper-textarea>\`

### How it renders`}

<br>${field}<br>

${md`### Usage

--- js
import { textbox } from '@lit-any/components-paper-elements';
import { FieldTemplates } from 'lit-any;

FieldTemplates.default
    .when(f => f.type === 'string')
    .renders(textbox(options));
--- 
    
### Options

| Name | expected values | default value |
|--|--|
| **type** | \`'single line'\`, \`'multi line'\` | \`'single line'\` |

`}`;
}
