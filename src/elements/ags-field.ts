import 'link!../behaviors/AgsFieldStamper.html';
import {notify, behavior, template, observe} from "twc/annotations/polymer";

/**
 * @demo demo/ags-field.html
 */

@template(`<div id="fallbackField">
    <template is="dom-if" if="[[property]]">
        <template is="dom-if" if="[[noTemplateFound]]">
            <input type="text" value="{{value::input}}" required$="[[required]]"/>
        </template>
    </template>
</div>

<div id="dynamicField"></div>`)

@behavior(Augeas.AgsFieldStamper)
export class AgsField {

    property:String = null;

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
            const templates = this._getTemplates('form') || [];
            let found = false;
            const elementRoot = Polymer.dom(this.$.dynamicField);

            while (elementRoot.firstChild) {
                elementRoot.removeChild(elementRoot.firstChild);
            }

            for (let i = templates.length - 1; i >= 0; i--) {

                const template = templates[i];

                if (!template.template || !template.isMatch || !template.isMatch(property, range)) continue;

                found = true;

                this.templatize(template.template);
                this._stampedTemplate = this.stamp({
                    value: this.value
                });
                elementRoot.appendChild(this._stampedTemplate.root);

                notifyStamped(template, this.value);

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

function notifyStamped(template: HTMLElement, value: any) {
    template.dispatchEvent(new CustomEvent('stamped', {
        detail: {
            value: value
        }
    }));
}
