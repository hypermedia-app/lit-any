import { render } from 'lit-html/lib/lit-extended';

export default function (templateResult, root) {
    const container = document.querySelector('#container');

    render(templateResult, container);

    if (root) { return container.querySelector(root); }

    return container.children[0];
}