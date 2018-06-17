import pEvent from 'p-event';

export function forRender(litAnyBase) {
    return pEvent(litAnyBase, 'render');
}

export function forSubmit(litForm) {
    return pEvent(litForm, 'submit');
}
