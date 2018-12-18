/* global describe, it, beforeEach */
import { expect } from '@open-wc/testing';
import FieldTemplates from '@lit-any/lit-any/forms';

describe('FieldTemplates', () => {
    describe('when builder is created', () => {
        let builder;

        beforeEach(() => {
            builder = FieldTemplates.default.when;
        });

        it('should create builder for matching field', () => {
            expect(builder.fieldMatches).to.be.ok;
        });
    });
});
