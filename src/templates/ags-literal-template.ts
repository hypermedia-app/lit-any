import {AgsViewTemplate} from "../view-template-registry";

@behavior(AgsViewTemplate)
@extend('template')
@component('ags-literal-template')
class AnyLiteralTemplate extends polymer.Base {
    objectMatches(resource) {
        return !(typeof resource === 'object') || !! resource['@value'];
    }
}

AnyLiteralTemplate.register();