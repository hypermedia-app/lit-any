import ViewTemplates from '../../lit-any/views';

describe('ViewTemplates', () => {
    describe('when builder is created', () => {
        let builder;

        beforeEach(() => {
            builder = ViewTemplates.default.when;
        });

        it('should create builder for matching values', () => {
            expect(builder.valueMatches).to.be.defined;
        });

        it('should create builder for matching scope', () => {
            expect(builder.scopeMatches).to.be.defined;
        });
    });
});
