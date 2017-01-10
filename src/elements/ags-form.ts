import 'link!ags-field.html';
import { IContract } from '../interfaces';
import {notify, template} from "twc/annotations/polymer";

/**
 * Uber element `<ags-form>`
 *
 * @demo ../demo/fp-category-page-demo.html
 */
@template('ags-form.html')
export class AgsForm {

    @notify
    value: Object = null;

    /**
     * Whatever
     */
    contract: IContract;

    _fieldValueChanged(e) {
        if(!e.detail.value) return;

        const value = this.value || {};

        value[e.model.item.property] = [{
            '@value': e.detail.value
        }];

        this.set('value', value);
    }
}
