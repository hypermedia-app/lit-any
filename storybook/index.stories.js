import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html/lib/lit-extended';
import '../src/elements/lit-view';
import { ViewTemplates } from '../src/template-registry';

const viewTemplates = ViewTemplates.byName('simple-stories');
viewTemplates.when
    .valueMatches(v => v === 's')
    .renders(() => html`xyz`);

storiesOf('lit-view', module)
    .addDecorator((story) => {
        const container = document.createElement('div');
        render(story(), container);

        return container;
    })
    .add('simple', () => {
        const value = 's';

        return html`<lit-view value="${value}" template-registry="simple-stories" ignore-missing></lit-view>`;
    });
