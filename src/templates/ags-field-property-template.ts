import "link!../behaviors/AgsFormTemplate.html";
import {behavior} from "twc/annotations/polymer";

@behavior(Augeas.AgsFormTemplate)
export class AgsFieldPropertyTemplate {
    isMatch(property, range) {
        return this.property && this.property == property;
    }
}
