import { FieldTemplates } from '../../lit-any/template-registry/index';

describe('FieldTemplates', () => {
    describe('when builder is created', () => {
        let builder;

        beforeEach(() => {
            builder = FieldTemplates.default.when;
        });

        it('should create builder for matching field', () => {
            expect(builder.fieldMatches).to.be.defined;
        });
    });
});
