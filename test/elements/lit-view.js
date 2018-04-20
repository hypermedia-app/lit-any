import { html } from 'lit-html/lib/lit-extended';
import '../../src/elements/lit-view';
import { ViewTemplates } from '../../src/template-registry';
import { forRender } from '../async-tests';

describe('lit-view', () => {
    let litView;
    let getTemplate;

    ViewTemplates.byName = () => ({ getTemplate });

    describe('with attributes', () => {
        beforeEach(() => {
            litView = fixture('lit-view-attrs');
        });

        it('sets scope', () => {
            expect(litView.templateScope).to.equal('some scope');
        });

        it('sets ignoreMissing', () => {
            expect(litView.ignoreMissing).to.be.true;
        });

        it('sets templateRegistry', () => {
            expect(litView.templateRegistry).to.equal('my registry');
        });
    });

    describe('rendering template', () => {
        beforeEach(() => {
            getTemplate = sinon.stub();
        });

        beforeEach(() => {
            litView = fixture('lit-view');
        });

        it('should render nothing when object is undefined', () => {
            litView._render();

            expect(litView.shadowRoot).to.be.null;
        });

        it('should raise event when value changes', (done) => {
            // then
            testHandler(litView, 'ly-render', () => {
                done();
            });

            // when
            litView.value = {};
        });

        it('should render found template', async () => {
            // given
            getTemplate.returns({
                render: (_, object) => html`<span>${object.value}</span>`,
            });

            litView.value = {
                '@id': 'test',
                value: 'test',
            };

            // when
            await forRender(litView);

            // then
            const span = litView.shadowRoot.querySelector('span');
            expect(span.textContent).to.equal('test');
        });

        it('should select template for given value', async () => {
            // given
            litView.value = 'a string';

            // when
            await forRender(litView);

            // then
            expect(getTemplate.calledWith({
                value: 'a string',
                scope: null,
            })).to.be.true;
        });

        it('should render pass scope to template', async () => {
            // given
            getTemplate.returns({
                render: (_1, _2, scope) => html`<span>${scope}</span>`,
            });

            litView.value = {};
            litView.templateScope = 'scope test';

            // when
            await forRender(litView);

            // then
            const span = litView.shadowRoot.querySelector('span');
            expect(span.textContent).to.equal('scope test');
        });
    });

    describe('rendering nested templates', () => {
        beforeEach(() => {
            getTemplate = sinon.stub();
        });

        beforeEach(() => {
            litView = fixture('lit-view');
        });

        it('should use render parameter', async () => {
            // given
            getTemplate.returns({
                render: (render, object) => html`<p class$="${object.clazz}">${render(object.child)}</p>`,
            });
            getTemplate.onCall(3).returns({
                render: (render, object) => html`<span>${object.value}</span>`,
            });
            litView.value = {
                clazz: 'l1',
                child: {
                    clazz: 'l2',
                    child: {
                        clazz: 'l3',
                        child: {
                            value: "I'm deep",
                        },
                    },
                },
            };

            // when
            await forRender(litView);

            // then
            const span = litView.shadowRoot.querySelector('p.l1 p.l2 p.l3 span');
            expect(span.textContent).to.equal("I'm deep");
        });

        it('should select template for selected value', async () => {
            // given
            getTemplate.returns({
                render: (render, v) => {
                    if (v.child) {
                        return html`${render(v.child)}`;
                    }

                    return html``;
                },
            });
            litView.value = {
                child: 10,
            };

            // when
            await forRender(litView);

            // then
            expect(getTemplate.firstCall.args[0].value).to.deep.equal({ child: 10 });
            expect(getTemplate.secondCall.args[0].value).to.equal(10);
        });

        it('should allow changing scope', async () => {
            // given
            getTemplate.returns({
                render: (render, v) => {
                    if (v.child) {
                        if (v.scope) {
                            return html`${render(v.child, v.scope)}`;
                        }
                        return html`${render(v.child)}`;
                    }

                    return html``;
                },
            });

            litView.value = {
                scope: 'nested',
                child: {
                    child: {},
                },
            };

            // when
            await forRender(litView);

            // then
            expect(getTemplate.firstCall.args[0].scope).to.be.null;
            expect(getTemplate.secondCall.args[0].scope).to.equal('nested');
            expect(getTemplate.thirdCall.args[0].scope).to.equal('nested');
        });
    });

    describe('when template is not found', () => {
        beforeEach(() => {
            getTemplate = sinon.stub();
        });

        beforeEach(() => {
            litView = fixture('lit-view');
        });

        xit('should render fallback template', () => {

        });
    });

    describe('when value is set before inserting to DOM', () => {
        let manualView;

        beforeEach(() => {
            getTemplate = sinon.stub();
            manualView = document.createElement('lit-view');
            manualView.value = {
                inserted: 'manually',
            };
        });

        it('should render correctly', (done) => {
            // given
            getTemplate.returns({
                render: (_, object) => html`<span>${object.inserted}</span>`,
            });

            // then
            testHandler(manualView, 'ly-render', () => {
                const span = manualView.shadowRoot.querySelector('span');
                expect(span.textContent).to.equal('manually');
                done();
            });

            // when
            document.body.appendChild(manualView);
        });
    });
});
