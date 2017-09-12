import { html } from 'lit-html';
import '../../src/elements/ags-view';
import { ViewTemplates } from '../../src/template-registry';

describe('ags-view', () => {
    let agsView;
    let getTemplate;

    beforeEach(() => {
        agsView = document.querySelector('ags-view');
        getTemplate = sinon.stub(ViewTemplates, 'getTemplate');
    });

    afterEach(() => {
        getTemplate.restore();
    });

    it('should render nothing when object is undefined', (done) => {
        testHandler(agsView, 'render', () => {
            expect(agsView.shadowRoot).to.be.null;
            done();
        });

        agsView._render();
    });

    it('should render found template', (done) => {
        getTemplate.returns({
            render: (_, object) => html`<span>${object.value}</span>`,
        });

        testHandler(agsView, 'render', () => {
            const span = agsView.shadowRoot.querySelector('span');

            expect(span.textContent).to.equal('test');
            done();
        });

        agsView.object = {
            '@id': 'test',
            value: 'test',
        };
    });

    describe('rendering nested templates', () => {
        it('should use render parameter', (done) => {
            // given
            getTemplate.returns({
                render: (render, object) => {
                    if (object.child) {
                        return html`<p class$="${object.clazz}">${render(object.child)}</p>`;
                    }

                    return html`<span>${object.value}</span>`;
                },
            });

            // then
            testHandler(agsView, 'render', () => {
                const span = agsView.shadowRoot.querySelector('p.l1 p.l2 p.l3 span');

                expect(span.textContent).to.equal("I'm deep");
                done();
            });

            // when
            agsView.object = {
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
        });
    });
});
