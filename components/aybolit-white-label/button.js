import { html } from 'lit-html';
import { until } from 'lit-html/directives/until';

export default function button({
    label, onClick,
}) {
    const buttonImport = import('@aybolit/white-label/dist-src/components/abw-button')
        .then(() => html`<abw-button @click="${onClick}">${label}</abw-button>`);

    return html`${until(buttonImport, '')}`;
}
