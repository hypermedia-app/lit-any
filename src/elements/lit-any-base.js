import { PropertiesChanged } from '@polymer/polymer/lib/mixins/properties-changed';

export default class LitAnyBase extends PropertiesChanged(HTMLElement) {
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
