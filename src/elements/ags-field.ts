import './ags-field.html!'
import {AgsFieldStamper} from '../form-template-registry';

@component('ags-field')
@behavior(AgsFieldStamper)
class AgsField extends polymer.Base {

    @property({value: null})
    'property':String;

    @property()
    range:String;

    @property({value: null})
    value:any;

    @property({readOnly: true})
    noTemplateFound:Boolean;

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
                var actualField = this.stamp().root;
                elementRoot.appendChild(actualField);

                break;
            }

            this._setNoTemplateFound(!found);
        });
    }
}

AgsField.register();