import { html } from 'lit-html';
import { until } from 'lit-html/directives/until';

export default function button({
    label, onClick,
}) {
    const buttonImport = import('@aybolit/material/dist-src/components/abm-button')
        .then(() => html`<abm-button @click="${onClick}">${label}</abm-button>`);

    return html`${until(buttonImport, '')}`;
}
