function setInputValue(input, text) {
    input.value = text;
    input.dispatchEvent(new Event('input'));
}
