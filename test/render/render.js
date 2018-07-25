import { html, render as litRender } from 'lit-html';
import render from '../../lit-any/src/render/index';

describe('render view', () => {
    let registry;

    beforeEach(() => {
        registry = {
            getTemplate: sinon.stub(),
        };
    });

    it('should create TemplateResult for found template', () => {
        // given
        registry.getTemplate.returns({
            render: (_, object) => html`<span>${object.value}</span>`,
        });
        const container = document.createElement('div');
        const value = {
            value: 'test',
        };

        // when
        litRender(render(registry, { value }, false), container);

        // then
        const span = container.querySelector('span');
        expect(span.textContent).to.equal('test');
    });

    it('should pass down scope parameter', () => {
        // given
        registry.getTemplate.returns({
            render: (_, object, scope) => html`<span>${scope}</span>`,
        });
        const container = document.createElement('div');
        const value = {
            value: 'test',
        };

        // when
        litRender(render(registry, { value, scope: 'some scope' }, false), container);

        // then
        expect(container.textContent).to.equal('some scope');
    });
});
