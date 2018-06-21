# Decorating field getter and setter

By default the object model is intended to be plain JSON. That is, each field value would be a direct
child of it's defining field. There may be cases when a model is represented by a more complex structure
which requires some additional processing before the direct user input can be applied to the form's value.

## JSON-LD (eg. schema.org)

JSON-LD is one such case where, in expanded representation, additional keywords are used to add additional
meaning to plain JSON objects. For example, where in plain JSON one could have

```json
{
  "age": 45
}
``` 

in JSON-LD such object could be represented more verbosely as 

```json
{
  "http://schema.org/age": {
    "@value": 45
  }
}
```

Without going into the details, this is to distinguish literal values (indicated by the `@value` keyword)
from URLs which would represent links not unlike those found in web pages.

Having also mentioned schema.org, the presented scenario also shows a text field to ask the user for an 
avatar URL. Such can be represented by a [`http://schema.org/ImageObject`][io] object. Thus, it is necessary
to wrap the user's input in the appropriate structure.

```json
{
  "http://schema.org/image": {
    "@type": "http://schema.org/ImageObject",
    "http://schema.org/contentUrl": "http://gravatar.com/image"
  }
}
```

[io]: http://schema.org/ImageObject

## Using field decorators

To facilitate this, one can define decorators which allow customizing how values are retrieved from the
form's value and set back to that object. Here's how this story defines the decorator for `ImageObject` by
adding a `valueDecorator` to the field's definition.

```js
const schemaImageDecorator = {
     get: (field, model) => {
        if (model && model[field.property]) {
            return model[field.property]['https://schema.org/contentUrl'] || '';
        }

        return '';
    },
    set: (model, property, newValue) => {
        model[property] = model[property] || {};

        model[property]['https://schema.org/contentUrl'] = newValue;
        model[property]['@type'] = 'https://schema.org/ImageObject';
    },
};

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
```
