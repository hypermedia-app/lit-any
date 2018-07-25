import { storiesOf } from '@storybook/polymer/dist/client';
import { textbox } from '@lit-any/components/paper-elements';
import docs from './notes/components/polymer-elements/textbox';

import '../bower_components/paper-input/paper-input.html';

storiesOf('lit-form/component sets/Polymer elements', module)
    .add('textbox', () => {
        const render = textbox();

        const field = {
            type: 'integer',
            title: 'Text field',
        };

        const input = render(field, 'id', 'Hello world', v => console.log(v));

        return docs(input);
    });
