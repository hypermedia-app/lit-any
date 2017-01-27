import "link!../behaviors/AgsViewTemplate.html";
import {behavior} from "twc/annotations/polymer";

@behavior(Augeas.AgsViewTemplate)
export class AgsObjectTemplate {

    /**
     * If truthy, it will be used as `@context` in JSON-LD API to compact the object before
     * binding with the rendered template
     */
    compactWith: Object;

    /**
     * Returns true if the value is a JS object and contains and `@id`
     */
    objectMatches(resource) {
        return typeof resource === 'object' && !!resource['@id'];
    }
}
