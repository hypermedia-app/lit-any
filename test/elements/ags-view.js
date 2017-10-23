import { html } from 'lit-html';
import '../../src/elements/ags-view';
import { ViewTemplates } from '../../src/template-registry';

describe('ags-view', () => {
    let agsView;
    let getTemplate;

    describe('with attributes', () => {
        beforeEach(() => {
            agsView = fixture('ags-view-attrs');
        });

        it('sets scope', () => {
            expect(agsView.templateScope).to.equal('some scope');
        });

        it('sets ignore', () => {
            expect(agsView.ignoreMissing).to.be.true;
        });
    });

    describe('rendering template', () => {
        beforeEach(() => {
            getTemplate = sinon.stub(ViewTemplates, 'getTemplate');
        });

        beforeEach(() => {
            agsView = fixture('ags-view');
        });

        afterEach(() => {
            getTemplate.restore();
        });

        it('should render nothing when object is undefined', () => {
            agsView._render();

            expect(agsView.shadowRoot).to.be.null;
        });

        it('should raise event when value changes', (done) => {
            // then
            testHandler(agsView, 'ags-render', () => {
                done();
            });

            // when
            agsView.value = {};
        });

        it('should render found template', () => {
            // given
            getTemplate.returns({
                render: (_, object) => html`<span>${object.value}</span>`,
            });

            agsView.value = {
                '@id': 'test',
                value: 'test',
            };

            // when
            agsView._render();

            // then
            const span = agsView.shadowRoot.querySelector('span');
            expect(span.textContent).to.equal('test');
        });

        it('should select template for given value', () => {
            // given
            agsView.value = 'a string';

            // when
            agsView._render();

            // then
            expect(getTemplate.calledWith({
                value: 'a string',
                scope: null,
            })).to.be.true;
        });

        it('should render pass scope to template', () => {
            // given
            getTemplate.returns({
                render: (_1, _2, scope) => html`<span>${scope}</span>`,
            });

            agsView.value = {};
            agsView.templateScope = 'scope test';

            // when
            agsView._render();

            // then
            const span = agsView.shadowRoot.querySelector('span');
            expect(span.textContent).to.equal('scope test');
        });
    });

    describe('rendering nested templates', () => {
        beforeEach(() => {
            getTemplate = sinon.stub(ViewTemplates, 'getTemplate');
        });

        beforeEach(() => {
            agsView = fixture('ags-view');
        });

        afterEach(() => {
            getTemplate.restore();
        });

        it('should use render parameter', () => {
            // given
            getTemplate.returns({
                render: (render, object) => html`<p class$="${object.clazz}">${render(object.child)}</p>`,
            });
            getTemplate.onCall(3).returns({
                render: (render, object) => html`<span>${object.value}</span>`,
            });

            // when
            agsView.value = {
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
            agsView._render();

            // then
            const span = agsView.shadowRoot.querySelector('p.l1 p.l2 p.l3 span');
            expect(span.textContent).to.equal("I'm deep");
        });

        it('should select template for selected value', () => {
            // given
            getTemplate.returns({
                render: (render, v) => {
                    if (v.child) {
                        return html`${render(v.child)}`;
                    }

                    return html``;
                },
            });

            // when
            agsView.value = {
                child: 10,
            };
            agsView._render();

            // then
            expect(getTemplate.firstCall.args[0].value).to.deep.equal({ child: 10 });
            expect(getTemplate.secondCall.args[0].value).to.equal(10);
        });

        it('should allow changing scope', (done) => {
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

            debugger;
            testHandler(agsView, 'ags-render', () => {
                // then
                expect(getTemplate.firstCall.args[0].scope).to.be.null;
                expect(getTemplate.secondCall.args[0].scope).to.equal('nested');
                expect(getTemplate.thirdCall.args[0].scope).to.equal('nested');
                done();
            });

            // when
            agsView.value = {
                scope: 'nested',
                child: {
                    child: {},
                },
            };
        });
    });

    describe('when template is not found', () => {
        beforeEach(() => {
            getTemplate = sinon.stub(ViewTemplates, 'getTemplate');
        });

        beforeEach(() => {
            agsView = fixture('ags-view');
        });

        afterEach(() => {
            getTemplate.restore();
        });

        it('should render fallback template', () => {

        });
    });

    describe('when value is set before inserting to DOM', () => {
        let manualView;

        beforeEach(() => {
            getTemplate = sinon.stub(ViewTemplates, 'getTemplate');
            manualView = document.createElement('ags-view');
            manualView.value = {
                inserted: 'manually',
            };
        });

        beforeEach(() => {
            agsView = fixture('ags-view');
        });

        it('should render correctly', (done) => {
            // given
            getTemplate.returns({
                render: (_, object) => html`<span>${object.inserted}</span>`,
            });

            // then
            testHandler(manualView, 'ags-render', () => {
                const span = manualView.shadowRoot.querySelector('span');
                expect(span.textContent).to.equal('manually');
                done();
            });

            // when
            document.body.appendChild(manualView);
        });
    });
});
