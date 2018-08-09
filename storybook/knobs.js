import { object, boolean, text } from '@storybook/addon-knobs';

export const showLabels = v => boolean('Show labels', typeof v === 'boolean' ? v : true, 'Appearance');

export const noSubmitButton = v => boolean('No submit button', typeof v === 'boolean' ? v : false, 'Appearance');

export const noResetButton = v => boolean('No reset button', typeof v === 'boolean' ? v : false, 'Appearance');

export const defaultValue = v => object('Value', v, 'Model');

export const submitButton = v => text('Submit button label', v, 'Appearance');

export const resetButton = v => text('Reset button label', v, 'Appearance');

export const contract = c => object('Contract', c, 'Model');
