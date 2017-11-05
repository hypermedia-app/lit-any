import pEvent from 'p-event';

export function async(it, expectation, test) {
    it(expectation, (done) => {
        test.call(this).then(done).catch(done);
    });
}

export function forRender(litAnyBase) {
    return pEvent(litAnyBase, 'ly-render');
}
