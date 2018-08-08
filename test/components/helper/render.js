import { render } from 'lit-html/lib/lit-extended';

export default async function (componentFactory, field, id = 'id', value = '', setter = () => {}) {
    const container = document.querySelector('#container');

    render(await componentFactory(field, id, value, setter), container);

    return container.children[0];
}
