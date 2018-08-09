import { html, render } from 'lit-html';
import TemplateRegistry from '../../lit-any/template-registry/template-registry';
import { TemplateSelectorBuilder } from '../../lit-any/template-registry/TemplateSelectorBuilder';

class TestBuilder extends TemplateSelectorBuilder { }

describe('Template Registry', () => {
    let registry;

    const matchAllSelector = {
        matches: () => true,
    };

    beforeEach(() => {
        registry = new TemplateRegistry(TestBuilder);
    });

    describe('initially', () => {
        it('should be empty', () => {
            expect(registry.count).to.be.equal(0);
        });
    });

    describe('when adding selectors', () => {
        it('should count them', () => {
            // given
            registry.when.renders(html``);
            registry.when.renders(html``);
            registry.when.renders(html``);

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
            const template = registry.getTemplate({ value: 'whatever' });

            // then
            expect(template.render).to.equal(templateFunc);
            expect(template.name).to.equal('test-template');
        });

        it('when name not given should return null', () => {
            // given
            registry.push(matchAllSelector, templateFunc);

            // when
            const template = registry.getTemplate({ value: 'whatever' });

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
            expect(template.name).to.be.null;
        });

        it('should pass value to matcher', () => {
            // given
            const template = {
                selector: {
                    matches: sinon.spy(),
                },
            };
            registry._templates.push(template);

            // when
            registry.getTemplate({
                value: 'test',
            });

            // then
            expect(template.selector.matches.calledWith({
                value: 'test',
            })).to.be.true;
        });

        it('should return null if not found', () => {
            // when
            const result = registry.getTemplate({
                value: 'test',
            });

            // then
            expect(result).to.be.null;
        });

        it('should not call matchers if argument is null', () => {
            // given
            const template = {
                selector: {
                    matches: sinon.spy(),
                },
            };
            registry._templates.push(template);

            // when
            registry.getTemplate(null);

            // then
            expect(template.selector.matches.called).to.be.false;
        });

        it('should not call matchers if argument is undefined', () => {
            // given
            const template = {
                selector: {
                    matches: sinon.spy(),
                },
            };
            registry._templates.push(template);

            // when
            registry.getTemplate(undefined);

            // then
            expect(template.selector.matches.called).to.be.false;
        });
    });

    describe('when adding TemplateResult instance', () => {
        it('should wrap it as function', () => {
            // given
            registry.push(matchAllSelector, html`test`);
            const renderTarget = document.createElement('span');

            // when
            const template = registry.getTemplate({ value: 'whatever' });

            // then
            expect(template.render).to.be.a('function');
            render(template.render(), renderTarget);
            expect(renderTarget.textContent).to.equal('test');
        });
    });
});
