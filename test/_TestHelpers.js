/* eslint-disable */

function setInputValue(input, text) {
    input.value = text;
    input.dispatchEvent(new Event('input'));
}

(function (Mocha) {
    function extendInterfaceWithFixture(interfaceName) {
        var originalInterface = Mocha.interfaces[interfaceName];

        Mocha.interfaces[interfaceName] = function (suite) {
            originalInterface.apply(this, arguments);

            suite.on('pre-require', function (context, file, mocha) {
                context.testHandler = function (target, event, handler) {

                    target.addEventListener(event, handler);
                    target.addEventListener(event, function () {
                        target.removeEventListener(event, handler);
                    });
                };
            });
        };
    }

    Object.keys(Mocha.interfaces).forEach(extendInterfaceWithFixture);
})(this.Mocha);
