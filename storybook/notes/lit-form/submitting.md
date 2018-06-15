# Submitting `<lit-form>`

By default the form element will be rendered complete with a plain HTML submit button. Something like

```html
<lit-form id="form">
  <shadow-root>
    <fieldset>
      <!-- inputs -->
    </fieldset>
    
    <button type="submit">Submit</button>
  </shadow-root>
</lit-form>
``` 

## Submit button label

The text displayed on the submit button is controlled by a `submitButtonLabel` property and defaults to
**Submit**.

## Submitting the form manually

If necessary, the form can be submitted programmatically using calling `form.submit()`;

## Hiding submit button

If the form is submitted with code, it could make sense not to render the `<button>` element. In such case
an attribute can be set on the form.

```html
<lit-form no-submit-button></lit-form>
```

Alternatively, a corresponding property can be set like `form.noSubmitButton = true`.

## Handling form submission

Whenever submitted (manually or otherwise), the element will emit a `submit` event.

```html
<lit-form on-submit="handleSubmit"></lit-form>
```
