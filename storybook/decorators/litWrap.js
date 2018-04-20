import { render } from 'lit-html/lib/lit-extended';

export default function (story) {
    const container = document.createElement('div');
    render(story(), container);

    return container;
}
