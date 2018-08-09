export const showLabels = (boolean, v) => boolean('Show labels', typeof v === 'boolean' ? v : true, 'Appearance');

export const noSubmitButton = (boolean, v) => boolean('No submit button', typeof v === 'boolean' ? v : false, 'Appearance');

export const noResetButton = (boolean, v) => boolean('No reset button', typeof v === 'boolean' ? v : false, 'Appearance');

export const defaultValue = (object, v) => object('Value', v, 'Model');

export const submitButton = (text, v) => text('Submit button label', v, 'Appearance');

export const resetButton = (text, v) => text('Reset button label', v, 'Appearance');

export const contract = (object, c) => object('Contract', c, 'Model');
