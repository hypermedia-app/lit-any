import { md, sample } from '../markdown';

export default function notes(exampleForm) {
    return md`# Component sets

The easiest way to create cohesive forms is to globally set a set of components to use. Individual elements only choose
the component kind (textbox, dropdown, etc) and the actual element being rendered will come from the configured set.

## Setting up template registry

--- js
import Registry from '@lit-any/lit-any/forms;
import * as paperElements from '@lit-any/components-paper-elements';

Registry.default.useComponents(paperElements);
--- 

Switching the **component set** knob let's you quickly change the appearance of the entire form below. Individual fields
do not "know" if the will be with a paper element of with a vaadin component.

${sample(exampleForm)}

## Individual fields
    
Individual field templates are configured slightly different, using a \`renderComponent\` method instead of \`render\`.
It accepts an \`{ type, options }\` object where the \`type\` is a string which must match the component name from the set
and the \`options\` will be passed to the actual builder of the chosen component. 

For common component those objects do not have to be constructed manually. Instead they can be imported from 
\`lit-any/components\` to reduce boilerplate. 

Here's how the form above is configured to render a dropdown menu for a \`languages\` property.

--- js
import { dropdown } from '@lit-any/lit-any/components';
import Registry from '@lit-any/lit-any/forms;

Registry.when
    .fieldMatches(f => f.type === 'language')
    .rendersComponent(dropdown({
        items: [
            { value: 'en', label: 'English' },
            { value: 'de', label: 'German' },
            { value: 'pl', label: 'Polish' },
        ],
    }));
--- `;
}
