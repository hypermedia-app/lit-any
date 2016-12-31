import 'link!ags-field.html';
import { IContract } from '../interfaces';

@template('ags-form.html')
export class AgsForm {

    @notify
    value: Object = null;

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
