import '../../src/elements/lit-form';
import { async, forRender } from '../async-tests';

describe('lit-form', () => {
    let litForm;

    beforeEach(() => {
        litForm = fixture('lit-form');
    });

    async(it, 'should render empty form for empty contract', async () => {
        // given
        litForm.contract = { };

        // when
        await forRender(litForm);

        // then
        expect(litForm.form.children.length).to.equal(0);
    });

    async(it, 'should render legend for contract title', async () => {
        // given
        litForm.contract = {
            title: 'My first form',
        };

        // when
        await forRender(litForm);

        // then
        expect(litForm.form.querySelector('legend').textContent).to.equal('My first form');
    });
});
