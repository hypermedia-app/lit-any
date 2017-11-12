import { FieldTemplates } from '../../src/template-registry/index';

describe('FieldTemplates', () => {
    describe('when builder is created', () => {
        let builder;

        beforeEach(() => {
            builder = FieldTemplates.when;
        });

        it('should create builder for matching field', () => {
            expect(builder.fieldMatches).to.be.defined;
        });
    });
});
