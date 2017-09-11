import {TemplateRegistry} from '../../src/template-registry/template-registry'
import {html} from 'lit-html';

describe('Template Registry', () => {

    let registry;

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

            registry.when.value(() => true).renders(html``);
            registry.when.property(() => true).renders(html``);
            registry.when.scope(() => true).renders(html``);

            expect(registry.count).to.be.equal(3);

        });

    });

});
