import { html } from 'lit-html';
import render from '../../src/render';

describe('render view', () => {
    let registry;

    beforeEach(() => {
        registry = {
            getTemplate: sinon.stub(),
        };
    });

    it('should write found template to given node', () => {
        // given
        registry.getTemplate.returns({
            render: (_, object) => html`<span>${object.value}</span>`,
        });
        const container = document.createElement('div');
        const value = {
            value: 'test',
        };

        // when
        render(registry, { value }, container, false);

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
        render(registry, { value, scope: 'some scope' }, container, false);

        // then
        expect(container.textContent).to.equal('some scope');
    });
});
