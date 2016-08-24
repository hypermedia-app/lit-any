import {AgsViewTemplate} from '../view-template-registry';

@component('ags-array-template')
@behavior(AgsViewTemplate)
@extend('template')
class ArrayTemplate extends polymer.Base {
    objectMatches(res) {
        return Array.isArray(res);
    }
}

ArrayTemplate.register();