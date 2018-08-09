import pEvent from 'p-event';
import * as components from '../../components/paper-elements';
import render from './helper/render';
import element from './helper/import';

describe('paper-elements', () => {
    let opts;

    describe('textbox', () => {
        describe('single line', () => {
            before(async () => {
                await element('paper-input');
            });

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
                expect(el.tagName).to.match(/paper-input/i);
                expect(el.getAttribute('type')).to.equal('text');
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

            it('should be [auto-validate]', async () => {
                // given
                const field = {
                    title: 'user name',
                };

                // when
                const textbox = components.textbox(opts);
                const el = await render(textbox, field);

                // then
                expect(el.autoValidate).to.be.true;
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
            before(async () => {
                await element('paper-textarea', 'paper-input/paper-textarea');
            });

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
                expect(el.tagName).to.match(/paper-textarea/i);
            });

            it('should be [auto-validate]', async () => {
                // given
                const field = {
                    title: 'user name',
                };

                // when
                const textbox = components.textbox(opts);
                const el = await render(textbox, field);

                // then
                expect(el.autoValidate).to.be.true;
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

        describe('dropdown', () => {
            before(async () => {
                await element('paper-dropdown-menu');
            });

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

            it('should fire validation when value is set', async () => {
                // given
                const field = {
                    title: 'user name',
                };
                const dropdown = components.dropdown(opts);
                const el = await render(dropdown, field);
                el.validate = sinon.spy();
                const valueChangedToHappen = pEvent(el, 'value-changed');

                // when
                el.value = 'hello';

                // then
                await valueChangedToHappen;
                expect(el.validate.called).to.be.true;
            });
        });
    });
});
