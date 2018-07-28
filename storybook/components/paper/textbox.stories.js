import { storiesOf } from '@storybook/polymer/dist/client/index';
import { boolean, select } from '@storybook/addon-knobs';
import '@bower_components/paper-input/paper-input.html';
import '@bower_components/paper-input/paper-textarea.html';

import { textbox } from '../../../components/paper-elements';
import docs from '../../notes/components/polymer-elements/textbox';
import set from '../set-logger';

storiesOf('lit-form/component sets/Paper elements', module)
    .add('textbox', () => {
        const render = textbox({
            type: select('type', ['single line', 'multi line'], 'single line'),
            required: boolean('required', false),
        });

        const field = {
            title: 'Text field',
        };

        const input = render(field, 'id', '', set);

        return docs(input);
    });
