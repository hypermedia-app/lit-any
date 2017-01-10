import "link!../behaviors/AgsViewTemplate.html";
import {behavior} from "twc/annotations/polymer";

@behavior(Augeas.AgsViewTemplate)
export class AgsArrayTemplate {
    objectMatches(res) {
        return Array.isArray(res);
    }
}
