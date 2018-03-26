import { storiesOf } from '@storybook/polymer';
import { html } from 'lit-html/lib/lit-extended';
import '../elements/lit-view';

storiesOf('lit-view', module)
    .add('simple', () => {
        const value = {};

        return html`<lit-view value="${value}"></lit-view>`;
    });
