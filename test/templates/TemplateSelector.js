import TemplateSelector from '../../src/template-registry/TemplateSelector';

describe('TemplateSelector', () => {
    let selector;

    beforeEach(() => {
        selector = new TemplateSelector();
    });

    describe('matches', () => {
        it('should match when all matchers return true', () => {
            // given
            selector._matchers.push(() => true);
            selector._matchers.push(() => true);
            selector._matchers.push(() => true);

            // then
            expect(selector.matches()).to.be.true;
        });

        it('should not match when any matcher returns false', () => {
            // given
            selector._matchers.push(() => true);
            selector._matchers.push(() => false);
            selector._matchers.push(() => true);

            // then
            expect(selector.matches()).to.be.false;
        });

        it('should call matcher with passed arguments', () => {
            // given
            const value = {};
            const property = 'p';
            const scope = 'demo';
            const spy = sinon.spy();
            selector._matchers.push(spy);

            // when
            selector.matches({ value, property, scope });

            // then
            expect(spy.calledWith({ value, property, scope })).to.be.true;
        });
    });
});
