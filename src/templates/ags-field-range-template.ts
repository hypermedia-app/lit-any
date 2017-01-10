import "link!../behaviors/AgsFormTemplate.html";
import {behavior} from "twc/annotations/polymer";

@behavior(Augeas.AgsFormTemplate)
export class AgsFieldRangeTemplate {
    isMatch(property, range) {
        return this.range && this.range == range;
    }
}
