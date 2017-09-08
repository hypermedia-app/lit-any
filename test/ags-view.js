import '../../src/elements/ags-view';
import {ViewTemplates} from '../../src/template-registry';
import {Template} from '../../src/template-registry/template-registry';
import {html, TemplateResult} from "lit-html";

class TestTemplate extends Template {
    template(object) {
        return html`<span>${object.value}</span>`;
    }

    matches(object, predicate, scope) {
        return true;
    }

}

describe('ags-view', () => {

    let agsView;

    beforeEach(() => {
        ViewTemplates._clear();
        agsView = document.querySelector('ags-view');
    });

    it('should render nothing when object is undefined', (done) => {
        testHandler(agsView, 'render', () => {
            expect(agsView.shadowRoot).to.be.null;
            done();
        });

        agsView._render();
    });

    it('should render found template', (done) => {
        ViewTemplates.push(new TestTemplate());

        testHandler(agsView, 'render', () => {
            const span = agsView.shadowRoot.querySelector('span');

            assert.equal(span.textContent, 'test');
            done();
        });

        agsView.object = {
            '@id': 'test',
            value: 'test'
        };
    });

});
