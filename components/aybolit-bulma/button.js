import { html } from 'lit-html';
import { until } from 'lit-html/directives/until';

export default function button({
    label, onClick,
}) {
    const buttonImport = import('@aybolit/bulma/dist-src/components/abu-button')
        .then(() => html`<abu-button @click="${onClick}">${label}</abu-button>`);

    return html`${until(buttonImport, '')}`;
}
