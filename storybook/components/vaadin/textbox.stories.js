import { storiesOf } from '@storybook/polymer/dist/client/index';
import { boolean, select } from '@storybook/addon-knobs';

import { textbox } from '@lit-any/components-vaadin';
import docs from '../../notes/components/vaadin/textbox';
import set from '../set-logger';

storiesOf('lit-form/component sets/Vaadin', module)
    .add('textbox', () => {
        const render = textbox({
            type: select('type', ['single line', 'multi line'], 'single line'),
        });

        const field = {
            title: 'Text field',
            required: boolean('required', false),
        };

        const input = render(field, 'id', '', set);

        return docs(input);
    });
