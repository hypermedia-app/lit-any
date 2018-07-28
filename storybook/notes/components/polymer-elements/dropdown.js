import { html } from 'lit-html/lib/lit-extended';
import { md, codeblock } from '../..';

export default function notes(staticSelection, funcItems) {
    return html`${md(`
# Paper elements

## Dropdown menu

Uses Polymer \`<paper-dropdown-menu>\`

### How it renders`)}

<br>${staticSelection}<br>

${md(`### Usage

${codeblock('js')}
import { dropdown } from '@lit-any/components-paper-elements';
import { FieldTemplates } from 'lit-any;

FieldTemplates.default
    .when(f => f.type === 'string')
    .renders(dropdown(options));
${codeblock()}
    
### Options

| Name | expected values | default value |
|--|--|
| **items** | Array or function | \`[]\` |

#### Providing items

Items can be a static list of elements with \`label\` and \`value\` keys

${codeblock('js')}
dropdown({
    items: [
        { label: 'Polish', value: 'pl' },
        { label: 'English', value: 'en' },
    ]
});
${codeblock()}

Or it can be a function which takes the field as parameter and returns such array as above. For example it would be
possible to translate ISO language codes to use their localized names as labels

${codeblock('js')}
import ISO6391 from 'iso-639-1';

dropdown({
    items: field => field.languages.map(lang => ({
        value: lang,
        label: ISO6391.getNativeName(lang),
    }))
});
${codeblock()}`)}

<br>${funcItems}<br>`;
}
