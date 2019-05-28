import { html } from 'lit-html';
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat';

export function textbox({
    type = 'single line',
} = { }) {
    return (f, id, v, set) => {
        if (type === 'multi line') {
            import('@polymer/paper-input/paper-textarea');
            return html`<paper-textarea 
                            label="${f.title}"
                            .value="${v || ''}"
                            ?required="${f.required}"
                            auto-validate
                            @value-changed="${e => set(e.target.value)}" ></paper-textarea>`;
        }

        import('@polymer/paper-input/paper-input');
        return html`<paper-input 
                        label="${f.title}"
                        type="text"
                        .value="${v || ''}"
                        ?required="${f.required}"
                        auto-validate
                        @value-changed="${e => set(e.target.value)}" ></paper-input>`;
    };
}

export function dropdown({
    items = [],
} = {}) {
    return (f, id, v, set) => {
        import('@polymer/paper-listbox/paper-listbox');
        import('@polymer/paper-dropdown-menu/paper-dropdown-menu');
        import('@polymer/paper-item/paper-item');

        function setValue(e) {
            e.target.validate();
            return set(e.target.querySelector('paper-listbox').selected);
        }

        let options = items;
        if (typeof items === 'function') {
            options = items(f);
        }

        if (!options.then) {
            options = Promise.resolve(options);
        }

        function renderItem(option) {
            return html`<paper-item .value="${option.value}">${option.label}</paper-item>`;
        }

        const paperItems = options.then(resolved => html`${repeat(resolved, renderItem)}`);

        return html`<paper-dropdown-menu label="${f.title}" 
                                         ?no-animations="${!window.KeyframeEffect}"
                                         @value-changed="${setValue}"
                                         ?required="${f.required}">
  <paper-listbox slot="dropdown-content" attr-for-selected="value" .selected="${v}">
    ${until(paperItems, '')}
  </paper-listbox>
</paper-dropdown-menu>`;
    };
}

export function button({
    label, onClick,
}) {
    const buttonImport = import('@polymer/paper-button/paper-button')
        .then(() => html`<paper-button @tap="${onClick}">${label}</paper-button>`);

    return html`${until(buttonImport, '')}`;
}
