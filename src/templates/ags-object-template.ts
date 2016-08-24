import {AgsViewTemplate} from "../view-template-registry";

@behavior(AgsViewTemplate)
@extend('template')
@component('ags-object-template')
class AnyObjectTemplate extends polymer.Base {
    objectMatches(resource) {
        var isObject = typeof resource === 'object' && !!resource['@id'];

        return isObject;
    }
}

AnyObjectTemplate.register();