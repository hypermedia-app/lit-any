import { configure } from '@storybook/polymer';

function loadStories() {
    require('../storybook/index.js');
}

configure(loadStories, module);
