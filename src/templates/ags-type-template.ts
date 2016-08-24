import {AgsViewTemplate} from '../view-template-registry';

@component('ags-type-template')
@behavior(AgsViewTemplate)
@extend('template')
class TypeTemplate extends polymer.Base {

    @property()
    type: String;

    objectMatches(res) {
        if(!this.type) {
            console.warn('type property is not set for ags-type-template');
            return false;
        }

        if(Array.isArray(res['@type'])) {
            return res['@type'].some(t => t === this.type);
        }

        return res['@type'] === this.type;
    }
}

TypeTemplate.register();