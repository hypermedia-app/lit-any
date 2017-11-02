import TemplateSelectorBuilder from '../../src/template-registry/TemplateSelectorBuilder';

describe('TemplateSelectorBuilder', () => {
    let builder;

    beforeEach(() => {
        builder = new TemplateSelectorBuilder({});
    });

    describe('adding value matcher function', () => {
        it('creates a matcher', () => {
            // given
            const valueToMatch = 'test val';

            // when
            builder.value(v => v === 'test val');

            // then
            const matcher = builder._selector._matchers[0];
            expect(matcher({
                value: valueToMatch,
            })).to.be.true;
        });
    });

    describe('adding scope matcher function', () => {
        it('creates a matcher', () => {
            // given
            const valueToMatch = 'the scope';

            // when
            builder.scope(s => s === 'the scope');

            // then
            const matcher = builder._selector._matchers[0];
            expect(matcher({
                scope: valueToMatch,
            })).to.be.true;
        });
    });

    describe('adding scope matcher shorthand', () => {
        it('creates a matcher', () => {
            // given
            const valueToMatch = 'the scope';

            // when
            builder.scope('the scope');

            // then
            const matcher = builder._selector._matchers[0];
            expect(matcher({
                scope: valueToMatch,
            })).to.be.true;
        });
    });
});
