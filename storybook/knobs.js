export const showLabels = (boolean, v) => boolean('Show labels', typeof v === 'boolean' ? v : true);

export const noSubmitButton = (boolean, v) => boolean('No submit button', typeof v === 'boolean' ? v : false);

export const noResetButton = (boolean, v) => boolean('No reset button', typeof v === 'boolean' ? v : false);

export const defaultValue = (object, v) => object('Value', v);

export const submitButton = (text, v) => text('Submit button label', v);

export const resetButton = (text, v) => text('Reset button label', v);

export const contract = (object, c) => object('Contract', c);
