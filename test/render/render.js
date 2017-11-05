import { html } from 'lit-html';
import render from '../../src/render';
import { ViewTemplates } from '../../src/template-registry';

describe('render view', () => {
    let getTemplate;

    beforeEach(() => {
        getTemplate = sinon.stub(ViewTemplates, 'getTemplate');
    });

    afterEach(() => {
        getTemplate.restore();
    });

    it('should write found template to given node', () => {
        // given
        getTemplate.returns({
            render: (_, object) => html`<span>${object.value}</span>`,
        });
        const container = document.createElement('div');
        const value = {
            value: 'test',
        };

        // when
        render.view({ value }, container);

        // then
        const span = container.querySelector('span');
        expect(span.textContent).to.equal('test');
    });

    it('should pass down scope parameter', () => {
        // given
        getTemplate.returns({
            render: (_, object, scope) => html`<span>${scope}</span>`,
        });
        const container = document.createElement('div');
        const value = {
            value: 'test',
        };

        // when
        render.view({ value, scope: 'some scope' }, container);

        // then
        expect(container.textContent).to.equal('some scope');
    });
});
