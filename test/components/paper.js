import * as components from '../../components/paper-elements';
import render from './helper/render';

describe('paper-elements component', () => {
    let opts;

    describe('textbox', () => {
        describe('single line', () => {
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
