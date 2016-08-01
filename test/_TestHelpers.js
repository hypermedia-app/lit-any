function setInputValue(input, text) {
    var e = document.createEvent('TextEvent');
    e.initTextEvent(
        'textInput',
        true,
        true,
        null,
        text
    );
    input.dispatchEvent(e);
}
