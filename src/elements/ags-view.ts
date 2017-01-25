import "link!../behaviors/RegisteredTemplateConsumer.html";
import {notify, behavior, style, observe} from "twc/annotations/polymer";

/**
 *
 */

@style(`:host {
            display: block;
            @apply(--object-view);
        }`)
@behavior(Augeas.RegisteredTemplateConsumer)
export class AgsView {

    object: Object;

    predicate: String = null;

    templateScope: String = '';

    ignoreMissing: Boolean = false;

    @notify
    readonly hasBeenRendered: Boolean = false;

    params: Object = {};

    connectedCallback() {
        document.addEventListener('ags-templates', (() => {
            if (this.object) {
                this._draw(this.object, this.predicate, this.templateScope, this.ignoreMissing, this.params);
            }
        }).bind(this));
    }

    @observe('object,predicate,templateScope,ignoreMissing,params')
    _draw(object, predicate, templateScope, ignoreMissing, params) {
        var templates = this._getTemplates('view') || [];
        var found;
        var elementRoot = Polymer.dom(this.root);

        while (elementRoot.firstChild) {
            elementRoot.removeChild(elementRoot.firstChild);
        }

        for (var i = 0; i < templates.length; i++) {
            var template = templates[i];

            if (!template.template) continue;

            if (!template.isMatch) continue;

            if (!template.isMatch(object, predicate, templateScope)) continue;

            found = true;

            if (template.name) {
                this.setAttribute('data-template', template.name);
            }

            this.getStamped(this, template.template, object)
                .then(stamped => replaceContent.call(this, elementRoot, stamped));

            break;
        }

        if (!found && !ignoreMissing) {
            var notFoundNode = document.createElement('div');
            notFoundNode.textContent = 'Template Not found';
            replaceContent.call(this, elementRoot, notFoundNode);

            console.warn('Template not found for', object);
        }
    }
}

function replaceContent(elementRoot, newContent) {
    elementRoot.appendChild(newContent);

    this._setHasBeenRendered(true);
}
