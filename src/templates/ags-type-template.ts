import "link!../behaviors/AgsViewTemplate.html";
import {behavior} from "twc/annotations/polymer";

/**
 * Uber element
 */
@behavior(Augeas.AgsViewTemplate)
export class AgsTypeTemplate {

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
