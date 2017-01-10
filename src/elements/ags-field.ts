import 'link!../behaviors/AgsFieldStamper.html';
import {notify, behavior, template, observe} from "twc/annotations/polymer";

@behavior(Augeas.AgsFieldStamper)
@template('ags-field.html')
export class AgsField {

    'property':String = null;

    range:String = null;

    @notify
    value:any = null;

    readonly noTemplateFound:Boolean;

    required:Boolean = false;

    ready() {
        this._instanceProps = {
            value: true
        };
    }

    @observe('value')
    _valueChanged(newValue) {
        if (this._stampedTemplate) {
            this._stampedTemplate.value = newValue;
        }
    }

    @observe('property,range')
    _draw(property, range) {
        this.async(() => {
            var templates = this._getTemplates('form') || [];
            var found = false;
            var elementRoot = Polymer.dom(this.$.dynamicField);

            while (elementRoot.firstChild) {
                elementRoot.removeChild(elementRoot.firstChild);
            }

            for (var i = templates.length - 1; i >= 0; i--) {

                var template = templates[i];

                if (!template.isMatch || !template.isMatch(property, range)) continue;

                found = true;

                this.templatize(template);
                this._stampedTemplate = this.stamp({
                    value: this.value
                });
                elementRoot.appendChild(this._stampedTemplate.root);

                break;
            }

            this._setNoTemplateFound(!found);
        });
    }

    _forwardInstanceProp(inst, path, value) {
        if(this.value != value) {
            this.set(path, value);
        }
    }
}
