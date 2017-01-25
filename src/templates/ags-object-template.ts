import "link!../behaviors/AgsViewTemplate.html";
import {behavior} from "twc/annotations/polymer";

@behavior(Augeas.AgsViewTemplate)
export class AgsObjectTemplate {
    objectMatches(resource) {
        return typeof resource === 'object' && !!resource['@id'];
    }
}
