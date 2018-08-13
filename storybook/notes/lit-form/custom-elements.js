import md from '../markdown';

export default function notes(form) {
    return md`# Customizing individual fields

It is possible to customize the appearance of individual fields by providing a partial template for given
type of property. This is done using the \`FieldTemplates\` registry where it is necessary to provide a function
which will return true if a field can be rendered and another which returns the appropriate template.

## Example

${form}

In above form, an integer type field will be rendered using a \`paper-input\` element with appropriate \`type\`.

--- js
import Registry from 'lit-any/forms';

Registry.default
    .when
    .fieldMatches(field => field.type === 'integer')
    .renders((field, id, value, set) =>
        html\`<paper-input id=$\{id} 
                type=number
                label=$\{field.title}
                value=$\{value} 
                on-change=$\{e => set(Number.parseInt(e.target.value, 0))}></paper-input>\`);
--- 

## \`fieldMatches\`

The \`fieldMatches\` function is simple enough. It gets called with one parameter, the field's definition
and should return \`true\`/\`false\` value.

## \`renders\`

This method is more interesting as it takes four parameters

* \`field\`

    The field definition. In the example above its \`title\` property is used as the floating placeholder.
    
* \`id\`

    A unique id which can be used to set the input element's \`id\` attribute. This is important when the form
    is set to display \`<label>\` for each field. Note that in this example they are hidden because material
    design uses the floating placeholder instead.
    
* \`value\`

    The initial value of the field.
    
* \`set\`

    A callback-like function which should be called when the field's value changes. Arguably this is the most
    important parameter.
    
    Different elements can have different API for listening to changes and also represent the
    value in different format (such as is the case here, where \`<paper-input>\`'s value is a string even
    though its type is set to number). For this reason it's the developer's responsibility to bind to the
    element's change event, convert the value to the correct type and call the setter function to propagate
    the change.`;
}
