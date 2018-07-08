import { LitElement } from '@polymer/lit-element/lit-element';
import { dashToCamelCase } from '@polymer/polymer/lib/utils/case-map';

export default class LitAnyBase extends LitElement {
    constructor() {
        super();

        this.templateRegistry = '';
    }

    attributeChangedCallback(name, oldValue, newValue) {
        let value = newValue;
        const propName = dashToCamelCase(name);

        if (this.constructor.properties[propName] === Boolean) {
            value = newValue !== null;
        }

        this[propName] = value;
    }
}
