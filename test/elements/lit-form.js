import { html } from 'lit-html/lib/lit-extended';
import '../../src/elements/lit-form';
import { async, forRender } from '../async-tests';
import { FieldTemplates } from '../../src/template-registry';

describe('lit-form', () => {
    let litForm;
    let getTemplate;
    const template = {};

    describe('by default', () => {
        beforeEach(() => {
            litForm = fixture('lit-form');
            getTemplate = sinon.stub(FieldTemplates, 'getTemplate');
            getTemplate.returns(template);
            template.render = sinon.spy();
        });

        afterEach(() => {
            if (getTemplate) {
                getTemplate.restore();
            }
        });

        async(it, 'should render empty form for empty contract', async () => {
            // given
            litForm.contract = {};

            // when
            await forRender(litForm);

            // then
            expect(litForm.form.children.length).to.equal(0);
        });

        async(it, 'should render legend for contract title', async () => {
            // given
            litForm.contract = {
                title: 'My first form',
            };

            // when
            await forRender(litForm);

            // then
            expect(litForm.form.querySelector('legend').textContent).to.equal('My first form');
        });

        async(it, 'should render wrapper for every field', async () => {
            // given
            litForm.contract = {
                fields: [{}, {}, {}, {}],
            };

            // when
            await forRender(litForm);

            // then
            expect(litForm.form.querySelectorAll('.field').length).to.equal(4);
        });

        async(it, 'should render every field', async () => {
            // given
            litForm.contract = {
                fields: [{}, {}, {}, {}],
            };

            // when
            await forRender(litForm);

            // then
            expect(getTemplate.getCalls().length).to.equal(4);
        });

        async(it, 'should render label and assign input\'s id', async () => {
            // given
            litForm.contract = {
                fields: [{ property: 'field_one' }],
            };

            // when
            await forRender(litForm);

            // then
            expect(litForm.form.querySelector('label').getAttribute('for')).to.be.equal('field_one');
        });

        async(it, 'should set label\'s text to title', async () => {
            // given
            litForm.contract = {
                fields: [{ property: 'field_one', title: 'some important input' }],
            };

            // when
            await forRender(litForm);

            // then
            expect(litForm.form.querySelector('label').textContent).to.be.equal('some important input');
        });

        async(it, 'should set label\'s text to property name is title is not given', async () => {
            // given
            litForm.contract = {
                fields: [{ property: 'field_one' }],
            };

            // when
            await forRender(litForm);

            // then
            expect(litForm.form.querySelector('label').textContent).to.be.equal('field_one');
        });

        async(it, 'should pass field id to render call', async () => {
            // given
            litForm.contract = {
                fields: [{ property: 'field_one' }],
            };

            // when
            await forRender(litForm);

            // then
            const renderCall = template.render.firstCall;
            expect(renderCall.args[1]).to.equal('field_one');
        });

        async(it, 'should pass pre-existing value when rendering field', async () => {
            // given
            litForm.contract = {
                fields: [{
                    property: 'prop',
                }],
            };
            litForm.value = {
                prop: '10',
            };

            // when
            await forRender(litForm);

            // then
            const renderCall = template.render.firstCall;
            expect(renderCall.args[2]).to.equal('10');
        });

        async(it, 'should pass null if pre-existing value is undefined when rendering field', async () => {
            // given
            litForm.contract = {
                fields: [{
                    property: 'prop',
                }],
            };
            litForm.value = {};

            // when
            await forRender(litForm);

            // then
            const renderCall = template.render.firstCall;
            expect(renderCall.args[2]).to.be.null;
        });

        async(it, 'should pass a change setter which sets value', async () => {
            // given
            template.render = (f, id, v, setter) => html`<input type="text" on-input="${e => setter(e.target.value)}" />`;
            litForm.contract = {
                fields: [{
                    property: 'test',
                }],
            };
            await forRender(litForm);

            // when
            const element = litForm.form.querySelector('input');
            element.value = 'abc';
            const e = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
            element.dispatchEvent(e);

            // then
            expect(litForm.value.test).to.equal('abc');
        });

        async(it, 'should not render legend when title is empty', async () => {
            // given
            litForm.contract = {
                fields: [{}],
            };

            // when
            await forRender(litForm);

            // then
            expect(litForm.form.querySelector('legend')).to.be.null;
        });

        async(it, 'should set form[action] to contract\'s target', async () => {
            // given
            litForm.contract = {
                target: 'http://exmple.com/resource',
            };

            // when
            await forRender(litForm);

            // then
            expect(litForm.form.getAttribute('action')).to.equal('http://exmple.com/resource');
        });

        async(it, 'should set form[method] to contract\'s method', async () => {
            // given
            litForm.contract = {
                method: 'POST',
            };

            // when
            await forRender(litForm);

            // then
            expect(litForm.form.getAttribute('method')).to.equal('POST');
        });

        async(it, 'should pass field to FieldTemplates.getTemplate', async () => {
            // given
            const field = {};
            litForm.contract = {
                fields: [field],
            };

            // when
            await forRender(litForm);

            // then
            const getTemplateCall = getTemplate.firstCall;
            expect(getTemplateCall.args[0].field).to.equal(field);
        });

        describe('when template was not found', () => {
            async(it, 'should return a plain input', async () => {
                // given
                getTemplate.returns(null);
                litForm.contract = {
                    fields: [{}],
                };

                // when
                await forRender(litForm);

                // then
                expect(litForm.form.querySelector('.field input.fallback')).to.be.not.undefined;
            });

            async(it, 'should set fallback input value', async () => {
                // given
                getTemplate.returns(null);
                litForm.contract = {
                    fields: [{
                        property: 'test',
                    }],
                };
                litForm.value = {
                    test: 'qwerty',
                };

                // when
                await forRender(litForm);

                // then
                expect(litForm.form.querySelector('.field input.fallback').value).to.be.equal('qwerty');
            });
        });
    });

    describe('when no-labels is set', () => {
        beforeEach(() => {
            litForm = fixture('lit-form-no-labels');
            getTemplate = sinon.stub(FieldTemplates, 'getTemplate');
            getTemplate.returns(template);
            template.render = sinon.spy();
        });

        afterEach(() => {
            if (getTemplate) {
                getTemplate.restore();
            }
        });

        async(it, 'should not render a label', async () => {
            // given
            litForm.contract = {
                fields: [{ property: 'field_one' }],
            };

            // when
            await forRender(litForm);

            // then
            expect(litForm.form.querySelector('label')).to.be.null;
        });
    });
});
