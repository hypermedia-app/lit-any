import {AgsFormTemplate} from "../form-template-registry";

@behavior(AgsFormTemplate)
@extend('template')
@component('ags-field-range-template')
class AgsFieldRangeTemplate extends polymer.Base {
    isMatch(property, range) {
        return this.range && this.range == range;
    }
}

AgsFieldRangeTemplate.register();