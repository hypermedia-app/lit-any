export function pEvent(element, event) {
    return new Promise((resolve) => {
        element.addEventListener(event, resolve)
    })
}

export function forSubmit(litForm) {
    return pEvent(litForm, 'submit')
}
