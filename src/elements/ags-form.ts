import 'src/elements/ags-form.html!';
import 'src/elements/ags-field';

@component('ags-form')
class AgsForm extends polymer.Base {

    @property({ type: Object, value: null, notify: true })
    value: Object;

    @property({ type: Object })
    contract: IContract;

    _fieldValueChanged(e) {
        if(!e.detail.value) return;

        var value = this.value || {};

        value[e.model.item.property] = [{
            '@value': e.detail.value
        }];

        this.set('value', value);
    }
}

AgsForm.register();