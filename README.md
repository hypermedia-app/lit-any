# lit-any [![codecov](https://codecov.io/gh/wikibus/lit-any/branch/master/graph/badge.svg)](https://codecov.io/gh/wikibus/lit-any)

Building late-bound User Interface with `lit-html` without actually creating (too many) custom elements

## Quick guide

### 1. Install

``` bash
yarn add @lit-any/lit-any
```

### 2. Set up how to render your content

You want to display an object which represents a person but the avatar comes in two flavors. Of course,
it's possible to keep abusing `if` statements or drop in a `<template is="dom-if">` (old syntax, I know).

With `lit-any` you can deconstruct your HTML by defining partial templates which will be rendered when
they are really needed.

```javascript
import ViewTemplates from '@lit-any/lit-any/views';
import { html } from 'lit-html';

ViewTemplates.default.when
    .value(isPerson)
    .renders((renderFunc, person) => html`
        <person-element .name="${person.name}">
            <span slot="avatar">
                ${renderFunc(person.avatar, 'person-element-avatar')}
            </span>
        </person-element>
    `);

ViewTemplates.default.when
    .scope('person-element-avatar')
    .value(v => v.url)
    .renders((_, image) => html`
        <img src="${image.url}" alt="avatar" />
    `);

ViewTemplates.default.when
    .scope('person-element-avatar')
    .value(v => v.large)
    .renders((_, image) => html`
        <a href="${image.url}">
            <img src="${image.large}" alt="avatar" />
        </a>
    `);

function isPerson(value) {
    return value.type === 'Person';
}
```

This will set up the rendering so that `<person-element>` is displayed for a person but the avatar will
be rendered based on the presence of the `large` property.

### 3a. Render anywhere

To do actual rendering you don't really need a dedicated custom element. Any container will be fine

```html
<div id="personContainer"></div>
```

```javascript
import render from '@lit-any/lit-any/render';

const person = {
    type: 'Person',
    image: {
        url: 'https://s.gravatar.com/avatar/1497654c2d1af3cef4987234d1aced57?s=80',
        large: 'https://s.gravatar.com/avatar/1497654c2d1af3cef4987234d1aced57?s=800'
    }
};

const personContainer = document.querySelector('#personContainer');

render({ value: person }, personContainer);
```

### 3b. Render element

Alternatively you can use the `lit-view` instead of rendering directly to any node.

```html
<lit-view id="personContainer"></lit-view>
```

```javascript
const person = {
    type: 'Person',
    image: {
        url: 'https://s.gravatar.com/avatar/1497654c2d1af3cef4987234d1aced57?s=80',
        large: 'https://s.gravatar.com/avatar/1497654c2d1af3cef4987234d1aced57?s=800'
    }
};

const personContainer = document.querySelector('#personContainer');

personContainer.value = person;
```

## More features

### Scoping

When you want to display same data differently in different context.

```javascript
import ViewTemplates from '@lit-any/lit-any/views';
import { html } from 'lit-html';
import * as moment from 'moment';

// show nicely formatted date by default
ViewTemplates.default.when
    .value(v => (v instanceOf Date))
    .renders((_, date) => html`<span>${moment(date).format('LL')}</span>`);

// but display calendar in 'event-large' scope
ViewTemplates.default.when
    .value(v => (v instanceOf Date))
    .scope('event-large')
    .renders((_, date) => html`<datetime-picker disabled .datetime="${date}"></datetime-picker>`);
```

Then set the scope on `lit-view` element:

```html
<lit-view .value="{{someDate}}" template-scope="event-large"></lit-view>
```

Or pass to the `render` function:

```javascript
import render from '@lit-any/lit-any/render';
import ViewTemplates from '@lit-any/lit-any/views';

const eventDateElement = document.querySelector('#eventDate').

render(ViewTemplates.default, {
    value: new Date(),
    scope: 'event-large',
}, eventDateElement);
```

Or override from parent template:

```javascript
ViewTemplates.default.when
    .value(v => v.type === 'Event')
    .renders((renderChild, event) => html`
        <my-event-element>
            <div slot="calendar">
                ${renderChild(event.date, 'event-large')}
            </div>
        </my-event-element>
    `);
```

## 3. Rendering forms

Set up how you will render input controls. The `set` parameter is a function used to set tha value
back to the form's model and has to be bound to the input control.

```js
import FieldTemplates from '@lit-any/lit-any/forms';

FieldTemplates.default.when
  .fieldMatches(field => field.type === 'http://www.w3.org/2001/XMLSchema#integer')
  .renders((field, id, value, set) => {
    return html`<input type=number value=${value}
                       @change=${e => set(Number.parseInt(e.target.value, 0))}>`;
  });
```

Create a form definition:

```js
const contract = {
  fields: [{
    title: 'Age',
    property: 'age',
    type: 'http://www.w3.org/2001/XMLSchema#integer'
  }]
};
```

Create a form on your page

```html
<lit-form .contract=${contract}
          submit-button-label="Register"
          @submit=${submitModel}></lit-form>
```

When the `Register` button is clicked `submitModel` will be called where the code will retrieve the form's
value from `event.detail.value`.

```js
function submitModel(e) {
  // submit lit-form's value
  fetch(e.detail.target, {
    method: e.detail.method,
    body: e.detail.value
  });
}
```
