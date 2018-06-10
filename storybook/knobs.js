import { object, boolean, text } from '@storybook/addon-knobs/polymer';

export const showLabels = v => boolean('Show labels', typeof v === 'boolean' ? v : true, 'Appearance');

export const defaultValue = v => object('Value', v, 'Model');

export const submitButton = v => text('Submit button label', v, 'Appearance');

export const contract = c => object('Contract', c, 'Model');
