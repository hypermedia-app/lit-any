import { configure } from '@storybook/polymer';

function loadStories() {
    require('../storybook/index.stories');

    const req = require.context('../storybook', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
