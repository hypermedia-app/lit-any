import 'link!ags-field.html';
import { IContract } from '../interfaces';
import {notify, template} from "twc/annotations/polymer";

/**
 * Uber element `<ags-form>`
 *
 * @demo ../demo/fp-category-page-demo.html
 */

@template(`<fieldset>
    <legend hidden$="[[!contract.title]]">[[contract.title]]</legend>
    <template is="dom-repeat" items="[[contract.body]]">
        <label>
            [[item.title]]
            <ags-field property="[[item.property]]" range="[[item.range]]" required="[[item.required]]" on-value-changed="_fieldValueChanged"></ags-field>
        </label>
    </template>
</fieldset>`)

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
