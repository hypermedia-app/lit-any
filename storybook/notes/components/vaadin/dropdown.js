import { html } from 'lit-html/lib/lit-extended';
import md from '../../markdown';

export default function notes(staticSelection, funcItems) {
    return html`${md(`
# Vaadin components

## Dropdown menu

Uses Polymer \`<vaadin-dropdown-menu>\` to display a list of key-value pairs

### Static items`)}

${staticSelection}<br>

${md`Items can be a static list of elements with \`label\` and \`value\` keys

--- js
dropdown({
    items: [
        { label: 'Polish', value: 'pl' },
        { label: 'English', value: 'en' },
    ]
});
--- 

### Dynamic items`}

${funcItems}<br>

${md`Items can be a provided as function which takes the field as parameter and returns such array as above. For example it would be
possible to translate ISO language codes to use their localized names as labels

--- js
import ISO6391 from 'iso-639-1';

dropdown({
    items: field => field.languages.map(lang => ({
        value: lang,
        label: ISO6391.getNativeName(lang),
    }))
});
--- 

## Usage

--- js
import { dropdown } from '@lit-any/components-vaadin';
import { FieldTemplates } from 'lit-any;

FieldTemplates.default
    .when(f => f.type === 'string')
    .renders(dropdown(options));
--- 
    
### Options

| Name | expected values | default value |
|--|--|
| **items** | Array or function | \`[]\` |

`}`;
}
