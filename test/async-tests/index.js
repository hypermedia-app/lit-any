import pEvent from 'p-event';

export default function forSubmit(litForm) {
    return pEvent(litForm, 'submit');
}
