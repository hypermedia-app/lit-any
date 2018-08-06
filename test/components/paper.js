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

            it('should mark required when field is required', () => {
                // given
                const field = {
                    required: true,
                };

                // when
                const textbox = components.textbox(opts);
                const el = render(textbox(field));

                // then
                expect(el.getAttribute('required')).to.be.not.null;
            });

            it('should render a text textbox', () => {
                // given
                const field = {
                };

                // when
                const textbox = components.textbox(opts);
                const el = render(textbox(field));

                // then
                expect(el.tagName).to.match(/paper-input/i);
                expect(el.getAttribute('type')).to.equal('text');
            });

            it('should set field title as label', () => {
                // given
                const field = {
                    title: 'user name',
                };

                // when
                const textbox = components.textbox(opts);
                const el = render(textbox(field));

                // then
                expect(el.label).to.equal('user name');
            });
        });

        describe('multi line', () => {
            beforeEach(() => {
                opts = {
                    type: 'multi line',
                };
            });

            it('should render a textarea', () => {
                // given
                const field = {
                };

                // when
                const textbox = components.textbox(opts);
                const el = render(textbox(field));

                // then
                expect(el.tagName).to.match(/paper-textarea/i);
            });
        });
    });
});
