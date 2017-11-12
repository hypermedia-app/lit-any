import { ViewTemplates } from '../../src/template-registry/index';

describe('ViewTemplates', () => {
    describe('when builder is created', () => {
        let builder;

        beforeEach(() => {
            builder = ViewTemplates.when;
        });

        it('should create builder for matching values', () => {
            expect(builder.valueMatches).to.be.defined;
        });

        it('should create builder for matching scope', () => {
            expect(builder.scopeMatches).to.be.defined;
        });
    });
});
