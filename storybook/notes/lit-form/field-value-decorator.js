import { html } from 'lit-html/lib/lit-extended';
import stringifyObject from 'stringify-object';
import md from '../markdown';

export default function notes(form, contract, decorator) {
    const docs = md`# Decorating field getter and setter

By default the object model is intended to be plain JSON. That is, each field value would be a direct
child of it's defining field. There may be cases when a model is represented by a more complex structure
which requires some additional processing before the direct user input can be applied to the form's value.

## When would you need it?

### Example 1: converting types

Some input fields could only return string values, even if they actually are expected to collect a number.
Such is the case with \`<paper-input type=number>\` whose value will always be a string even though it
restricts user input to digits only.

Thus, when the actual model expects a property to always be a JS \`Number\` object one could implement a 
decorator to convert the string coming from the input element to a numeric value.

### Example 2: JSON-LD (eg. schema.org)

JSON-LD is another case where, in expanded representation, additional keywords are used to add additional
meaning to plain JSON objects. For example, where in plain JSON one could have

--- json
{
  "age": 45
}
---  

in JSON-LD such object could be represented more verbosely as 

--- json
{
  "http://schema.org/age": {
    "@value": 45
  }
}
--- 

Without going into the details, this is to distinguish literal values (indicated by the \`@value\` keyword)
from URLs which would represent links not unlike those found in web pages.

Having also mentioned schema.org, the presented scenario also shows a text field to ask the user for an 
avatar URL. Such can be represented by a [\`http://schema.org/ImageObject\`][io] object. Thus, it is necessary
to wrap the user's input in the appropriate structure.

--- json
{
  "http://schema.org/image": {
    "@type": "http://schema.org/ImageObject",
    "http://schema.org/contentUrl": "http://gravatar.com/image"
  }
}
--- 

[io]: http://schema.org/ImageObject

## Running example

The form below shows how the raw input values are converted when initial model is applied and when the input values
change.`;

    const explained = md`## Using field decorators

To facilitate the above, one can define decorators which allow customizing how values are retrieved from the
form's value and set back to that object. Here's how this story defines the decorator for \`ImageObject\` by
adding a \`valueDecorator\` to a field's definition.

--- js
const schemaImageDecorator = ${stringifyObject(decorator)}

const jsonldContract = {
    fields: [
        {
            property: 'https://schema.org/image',
            title: 'Avatar URL',
            valueDecorator: schemaImageDecorator,
        },
        /* other fields */
    ],
};
--- 

A decorator can implement a \`wrap\` and \`unwrap\` functions. Both are optional. 

\`unwrap\` takes the original property value coming from the initial form value and returns the value to
bind to the input element.

\`wrap\` does the opposite. It takes the user input as parameter and returns the value to apply to the
form's model.`;

    return html`${docs} <br>${form}<br> ${explained}`;
}
