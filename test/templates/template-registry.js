import {TemplateRegistry} from '../../src/template-registry/template-registry'
import {Template} from '../../src/templates'

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

    describe('when adding templates', () => {

        it('should count them', () => {

            registry.push(new Template());
            registry.push(new Template());
            registry.push(new Template());

            expect(registry.count).to.be.equal(3);

        });

    });

});
