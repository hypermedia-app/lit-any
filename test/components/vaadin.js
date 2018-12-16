import * as components from '../../components/vaadin';
import render from './helper/render';

describe('vaadin components', () => {
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

            it('should set field title as label', async () => {
                // given
                const field = {
                    title: 'user name',
                };

                // when
                const textbox = components.textbox(opts);
                const el = await render(textbox, field);

                // then
                expect(el.label).to.equal('user name');
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
                expect(el.tagName).to.match(/vaadin-text-area/i);
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
});
