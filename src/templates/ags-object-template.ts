import "link!../behaviors/AgsViewTemplate.html";
import {behavior} from "twc/annotations/polymer";

@behavior(Augeas.AgsViewTemplate)
export class AgsObjectTemplate {

    /**
     * Returns true if the value is a JS object and contains and `@id`
     */
    objectMatches(resource) {
        return typeof resource === 'object' && !!resource['@id'];
    }
}
