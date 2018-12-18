/* global describe, it, beforeEach */
import { expect } from '@open-wc/testing';
import TemplateSelector from '@lit-any/lit-any/template-registry/TemplateSelector';
import ViewTemplateSelector from '@lit-any/lit-any/views/TemplateSelector';
import FieldTemplateSelector from '@lit-any/lit-any/forms/TemplateSelector';
import * as sinon from 'sinon';

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

describe('ViewTemplateSelector', () => {
    let selector;

    beforeEach(() => {
        selector = new ViewTemplateSelector();
    });

    describe('shouldMatch', () => {
        it('returns false if value is null', () => {
            // given
            const criteria = { value: null };

            // when
            const shouldMatch = selector.shouldMatch(criteria);

            // then
            expect(shouldMatch).to.be.false;
        });

        it('returns false if value is undefined', () => {
            // given
            const criteria = { };

            // when
            const shouldMatch = selector.shouldMatch(criteria);

            // then
            expect(shouldMatch).to.be.false;
        });
    });

    describe('matches', () => {
        it('should not match when value is null', () => {
            // given
            const criteria = { value: null };

            // when
            const matches = selector.matches(criteria);

            // then
            expect(matches).to.be.false;
        });

        it('should not match when value is undefined', () => {
            // given
            const criteria = { };

            // when
            const matches = selector.matches(criteria);

            // then
            expect(matches).to.be.false;
        });
    });
});

describe('FieldTemplateSelector', () => {
    let selector;

    beforeEach(() => {
        selector = new FieldTemplateSelector();
    });

    describe('shouldMatch', () => {
        it('returns false if field is null', () => {
            // given
            const criteria = { field: null };

            // when
            const shouldMatch = selector.shouldMatch(criteria);

            // then
            expect(shouldMatch).to.be.false;
        });

        it('returns false if field is undefined', () => {
            // given
            const criteria = { };

            // when
            const shouldMatch = selector.shouldMatch(criteria);

            // then
            expect(shouldMatch).to.be.false;
        });

        it('returns false if field.property is null', () => {
            // given
            const criteria = { field: { property: null } };

            // when
            const shouldMatch = selector.shouldMatch(criteria);

            // then
            expect(shouldMatch).to.be.false;
        });

        it('returns false if field.property is undefined', () => {
            // given
            const criteria = { field: {} };

            // when
            const shouldMatch = selector.shouldMatch(criteria);

            // then
            expect(shouldMatch).to.be.false;
        });
    });

    describe('matches', () => {
        it('should not match when field is null', () => {
            // given
            const criteria = { field: null };

            // when
            const matches = selector.matches(criteria);

            // then
            expect(matches).to.be.false;
        });

        it('should not match when field is undefined', () => {
            // given
            const criteria = { };

            // when
            const matches = selector.matches(criteria);

            // then
            expect(matches).to.be.false;
        });
    });
});
