import { expect } from '@open-wc/testing';
import * as components from 'lit-any/forms/FallbackComponents';
import render from './helper/render';

describe('native', () => {
    let opts;

    describe('textbox', () => {
        describe('single line', () => {
            beforeEach(() => {
                opts = {
                    type: 'single line',
                };
            });

            it('should mark required when field is required', async () => {
                // given
                const field = {
                    required: true,
                };

                // when
                const textbox = components.textbox(opts);
                const el = await render(textbox, field);

                // then
                expect(el.getAttribute('required')).to.be.not.null;
            });

            it('should render a text textbox', async () => {
                // given
                const field = {
                };

                // when
                const textbox = components.textbox(opts);
                const el = await render(textbox, field);

                // then
                expect(el.tagName).to.match(/input/i);
                expect(el.getAttribute('type')).to.equal('text');
            });

            it('should be required if field is required', async () => {
                // given
                const field = {
                    title: 'user name',
                    required: true,
                };

                // when
                const textbox = components.textbox(opts);
                const el = await render(textbox, field);

                // then
                expect(el.required).to.be.true;
            });
        });

        describe('multi line', () => {
            beforeEach(() => {
                opts = {
                    type: 'multi line',
                };
            });

            it('should render a textarea', async () => {
                // given
                const field = {
                };

                // when
                const textbox = components.textbox(opts);
                const el = await render(textbox, field);

                // then
                expect(el.tagName).to.match(/textarea/i);
            });

            it('should be required if field is required', async () => {
                // given
                const field = {
                    title: 'user name',
                    required: true,
                };

                // when
                const textbox = components.textbox(opts);
                const el = await render(textbox, field);

                // then
                expect(el.required).to.be.true;
            });
        });
    });

    describe('dropdown', () => {
        beforeEach(() => {
            opts = {
            };
        });

        it('should be required if field is required', async () => {
            // given
            const field = {
                title: 'user name',
                required: true,
            };

            // when
            const dropdown = components.dropdown(opts);
            const el = await render(dropdown, field);

            // then
            expect(el.required).to.be.true;
        });

        it('should accept items array', async () => {
            // given
            const field = {
                title: 'user name',
            };
            opts.items = [{}, {}, {}];

            // when
            const dropdown = components.dropdown(opts);
            const el = await render(dropdown, field);

            // then
            expect(el.querySelectorAll('select option').length).to.be.equal(3);
        });

        it('should accept items as function returning array', async () => {
            // given
            const field = {
                title: 'abc',
            };
            opts.items = f => f.title.split('').map(l => ({ label: l, value: l }));

            // when
            const dropdown = components.dropdown(opts);
            const el = await render(dropdown, field);

            // then
            const itemElements = el.querySelectorAll('option');
            expect(itemElements[0].value).to.be.equal('a');
            expect(itemElements[1].value).to.be.equal('b');
            expect(itemElements[2].value).to.be.equal('c');
        });

        it('should accept items as function returning promise', async () => {
            // given
            const field = {
                title: 'abc',
            };
            opts.items = f => Promise.resolve(f.title.split('').map(l => ({ label: l, value: l })));

            // when
            const dropdown = components.dropdown(opts);
            const el = await render(dropdown, field);

            // then
            const itemElements = el.querySelectorAll('option');
            expect(itemElements[0].value).to.be.equal('a');
            expect(itemElements[1].value).to.be.equal('b');
            expect(itemElements[2].value).to.be.equal('c');
        });
    });
});
