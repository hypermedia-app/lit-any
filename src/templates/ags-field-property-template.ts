import {AgsFormTemplate} from "../form-template-registry";

@behavior(AgsFormTemplate)
@extend('template')
@component('ags-field-property-template')
class AgsFieldPropertyTemplate extends polymer.Base {
    isMatch(property, range) {
        return this.property && this.property == property;
    }
}

AgsFieldPropertyTemplate.register();