import { html } from 'lit-html';
import { until } from 'lit-html/directives/until';
import 'zero-md/src/zero-md';
import '@polymer/paper-card/paper-card';

function createZeroMd(markdown) {
    return html`<zero-md><template><xmp>${markdown.replace(/---/g, '```')}</xmp></template></zero-md>`;
}

export function sample(templateResult) {
    const template = html`
<paper-card style="margin-top: 10px; margin-bottom: 20px; min-width: 200px; max-width: 500px">
    <div class="card-content">
        ${until(templateResult, 'Sample loading...')}
    </div>
</paper-card>`;

    template.isSample = true;

    return template;
}

export function md(strings, ...keys) {
    if (keys.length === 0) {
        return html`${strings[0]}`;
    }

    return keys.reduce((result, key, i) => {
        const next = result;
        if (key.isSample) {
            next.template = html`${result.template} ${createZeroMd(result.md)} ${key}`;
            next.md = '';
        } else if (i > 0) {
            next.md = `${result.md} ${strings[i]} ${key}`;
        }

        if (i === keys.length - 1) {
            const md2 = `${next.md} ${strings[i + 1]}`;
            next.template = html`${result.template} ${createZeroMd(md2)}`;
        }

        return next;
    }, { md: strings[0], template: html`` }).template;
}
