import md from '../markdown';

export default function notes(form) {
    return md`# Controlling \`<lit-form>\`

By default the form element will be rendered complete with a plain HTML submit and reset buttons. 
Something like

--- html
<lit-form id="form">
  <shadow-root>
    <fieldset>
      <!-- inputs -->
    </fieldset>
    
    <button type="submit">Submit</button>
    <input type="button" value="Reset">
  </shadow-root>
</lit-form>
--- 

## Example

${form}

## Button labels

The text displayed on the submit button is controlled by a \`submitButtonLabel\` property and defaults to
**Submit**.

The text displayed on the reset button is controlled by a \`resetButtonLabel\` property and defaults to
**Reset**.

## Submitting and clearing the form manually

If necessary, the form can be submitted programmatically calling \`form.submit()\` and the 
cleared by calling \`form.reset()\`.

## Hiding buttons

If the form is controlled with code, it could make sense not to render the button element. In such case
attributes can be set on the form.

--- html
<lit-form no-submit-button no-reset-button></lit-form>
--- 

Alternatively, corresponding properties can be set like 

--- 
form.noSubmitButton = true;
form.noResetButton = true;
--- 

## Handling form submission

Whenever submitted (manually or otherwise), the element will emit a \`submit\` event.

--- html
<lit-form on-submit="handleSubmit"></lit-form>
--- 
`;
}
