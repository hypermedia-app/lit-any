import { html } from 'lit-html';
import { until } from 'lit-html/directives/until';
import 'zero-md/src/zero-md';
import '@polymer/paper-card/paper-card';

function createZeroMd(markdown) {
    return html`<zero-md><template><xmp>${markdown.replace(/---/g, '```')}</xmp></template></zero-md>`;
}

export function sample(templateResult) {
    return html`
<paper-card style="margin-top: 10px; margin-bottom: 20px; min-width: 200px; max-width: 500px">
    <div class="card-content">
        ${until(templateResult, 'Sample loading...')}
    </div>
</paper-card>`;
}

export function md(strings, ...keys) {
    if (keys.length === 0) {
        return html`${strings[0]}`;
    }

    return keys.reduce((result, key, i) => {
        let next = html`${result}
                        ${createZeroMd(strings[i])}
                        ${key}`;

        if (i === keys.length - 1) {
            next = html`${next} ${createZeroMd(strings[i + 1])}`;
        }

        return next;
    }, html``);
}
