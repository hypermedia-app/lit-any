import { html } from 'lit-html';
import { until } from 'lit-html/directives/until';

export default function button({
    label, onClick,
}) {
    const buttonImport = import('@aybolit/bootstrap/dist-src/components/abs-button')
        .then(() => html`<abs-button @click="${onClick}">${label}</abs-button>`);

    return html`${until(buttonImport, '')}`;
}
