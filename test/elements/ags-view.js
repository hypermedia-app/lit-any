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

    describe('rendering nested templates', () => {
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
    });

    describe('when template is not found', () => {
        it('should render fallback template', () => {

        });
    });
});
