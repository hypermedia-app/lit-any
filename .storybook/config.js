import { configure, addDecorator } from '@storybook/polymer';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/polymer';
import litWrap from '../storybook/decorators/litWrap';
import litAny from '../package';

//addDecorator(litWrap);
addDecorator(withKnobs);

function loadStories() {
    const req = require.context('../storybook', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

setOptions({
    name: `lit-any ${litAny.version}`,
    addonPanelInRight: true,
    selectedAddonPanel: 'storybook/notes/panel',
    url: 'https://github.com/wikibus/lit-any',
    sortStoriesByKind: true,
});

configure(loadStories, module);
