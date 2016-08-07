import {RegisteredTemplate} from "../form-template-registry";

@behavior(RegisteredTemplate)
@extend('template')
@component('ags-field-property-template')
class AgsFieldPropertyTemplate extends polymer.Base {
    isMatch(property, range) {
        return this.property && this.property == property;
    }
}

AgsFieldPropertyTemplate.register();