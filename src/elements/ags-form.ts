import 'src/elements/ags-form.html!';
import 'src/elements/ags-field';

interface IContract {
    body: Array;
}

@component('ags-form')
class AgsForm extends polymer.Base {

    @property({ type: Object, value: null })
    value: Object;

    @property({ type: Object })
    contract: IContract;
}

AgsForm.register();