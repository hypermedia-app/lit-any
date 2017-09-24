import { html, render } from 'lit-html';
import TemplateRegistry from '../../src/template-registry/template-registry';

describe('Template Registry', () => {
    let registry;

    const matchAllSelector = {
        matches: () => true,
    };

    beforeEach(() => {
        registry = new TemplateRegistry();
    });

    describe('initially', () => {
        it('should be empty', () => {
            expect(registry.count).to.be.equal(0);
        });
    });

    describe('when adding selectors', () => {
        it('should count them', () => {
            // given
            registry.when.value(() => true).renders(html``);
            registry.when.value(() => true).renders(html``);
            registry.when.scope(() => true).renders(html``);

            // then
            expect(registry.count).to.be.equal(3);
        });
    });

    describe('when selecting template', () => {
        const templateFunc = () => html``;

        it('should return name and template func', () => {
            // given
            registry.push(matchAllSelector, templateFunc, 'test-template');

            // when
            const template = registry.getTemplate();

            // then
            expect(template.render).to.equal(templateFunc);
            expect(template.name).to.equal('test-template');
        });

        it('when name not given should return null', () => {
            // given
            registry.push(matchAllSelector, templateFunc);

            // when
            const template = registry.getTemplate();

            // then
            expect(template.name).to.be.null;
        });

        it('should return matching template for value', () => {
            // given
            registry._templates.push({
                selector: {
                    matches: c => c.value === 'test',
                },
            });

            // when
            const template = registry.getTemplate({
                value: 'test',
            });

            // then
            !expect(template.name).to.be.null;
        });
    });

    describe('when adding TemplateResult instance', () => {
        it('should wrap it as function', () => {
            // given
            registry.push(matchAllSelector, html`test`);
            const renderTarget = document.createElement('span');

            // when
            const template = registry.getTemplate();

            // then
            expect(template.render).to.be.a('function');
            render(template.render(), renderTarget);
            expect(renderTarget.textContent).to.equal('test');
        });
    });
});
