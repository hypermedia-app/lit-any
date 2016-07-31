function prepareFixture(fixtureId) {
    var fixture;

    beforeEach(function () {
        fixture = document.querySelector('test-fixture#' + fixtureId);
        fixture.create();
    });

    afterEach(function () {
        if (fixture && fixture.restore) {
            fixture.restore();
        }
    });
}

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
