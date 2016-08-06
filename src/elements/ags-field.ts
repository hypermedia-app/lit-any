import './ags-field.html!'
import {AgsFieldStamper} from '../form-template-registry';

@component('ags-field')
@behavior(AgsFieldStamper)
class AgsField extends polymer.Base {

    @property({value: null})
    'property':String;

    @property()
    range:String;

    @property({value: null, notify: true})
    value:any;

    @property({readOnly: true})
    noTemplateFound:Boolean;

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

    @observe('property')
    _draw(property) {
        this.async(() => {
            var templates = this.templates || [];
            var found = false;
            var elementRoot = Polymer.dom(this.$.dynamicField);

            while (elementRoot.firstChild) {
                elementRoot.removeChild(elementRoot.firstChild);
            }

            for (var i = 0; i < templates.length; i++) {
                var template = templates[i];

                if (!template.isMatch || !template.isMatch(property))continue;

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

AgsField.register();