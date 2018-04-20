import pEvent from 'p-event';

// eslint-disable-next-line import/prefer-default-export
export function forRender(litAnyBase) {
    return pEvent(litAnyBase, 'ly-render');
}
