import { PropertyAccessors } from '@polymer/polymer/lib/mixins/property-accessors';

export default class LitAnyBase extends PropertyAccessors(HTMLElement) {
    constructor() {
        super();

        this.__connected = false;
    }

    connectedCallback() {
        this._enableProperties();
        this.__connected = true;
        this._render();
    }

    disconnectedCallback() {
        this.__connected = false;
    }

    _propertiesChanged() {
        this._render();
    }
}
