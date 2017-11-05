import '../../src/elements/lit-form';
import { async, forRender } from '../async-tests';
import render from '../../src/render';

describe('lit-form', () => {
    let litForm;
    let renderFunc;

    beforeEach(() => {
        litForm = fixture('lit-form');
        renderFunc = sinon.stub(render, 'field');
    });

    afterEach(() => {
        renderFunc.restore();
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

    async(it, 'should render wrapper for every field', async () => {
        // given
        litForm.contract = {
            fields: [{}, {}, {}, {}],
        };

        // when
        await forRender(litForm);

        // then
        expect(litForm.form.querySelectorAll('.field').length).to.equal(4);
    });

    async(it, 'should render every field', async () => {
        // given
        litForm.contract = {
            fields: [{}, {}, {}, {}],
        };

        // when
        await forRender(litForm);

        // then
        expect(renderFunc.getCalls().length).to.equal(4);
    });

    async(it, 'should not render legend when title is empty', async () => {
        // given
        litForm.contract = {
            fields: [{}],
        };

        // when
        await forRender(litForm);

        // then
        expect(litForm.form.querySelector('legend')).to.be.null;
    });

    async(it, 'should set form[action] to contract\'s target', async () => {
        // given
        litForm.contract = {
            target: 'http://exmple.com/resource',
        };

        // when
        await forRender(litForm);

        // then
        expect(litForm.form.getAttribute('action')).to.equal('http://exmple.com/resource');
    });

    async(it, 'should set form[method] to contract\'s method', async () => {
        // given
        litForm.contract = {
            method: 'POST',
        };

        // when
        await forRender(litForm);

        // then
        expect(litForm.form.getAttribute('method')).to.equal('POST');
    });
});
