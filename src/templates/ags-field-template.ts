import {RegisteredTemplate} from "../form-template-registry";

@behavior(RegisteredTemplate)
@extend('template')
@component('ags-field-template')
class AgsFieldTemplate extends polymer.Base {
}

AgsFieldTemplate.register();