import {RegisteredTemplateConsumer} from "../view-template-registry";

@template(`<style>
            :host {
                display: block;
                @apply(--object-view);
            }
        </style>`)
@component('ags-view')
@behavior(RegisteredTemplateConsumer)
class AgsView extends polymer.Base {

    @property()
    object:Object;

    @property({ value: null })
    predicate:String;

    @property({ value: '' })
    templateScope: String;

    @property({ value: false })
    ignoreMissing: Boolean;

    @property({ readOnly: true, notify: true, value: false })
    hasBeenRendered: Boolean;

    @property({ type: Object, value: {} })
    params: Object;

    attached() {
        document.addEventListener('ags-templates', (() => {
            if(this.object)
                this._draw(this.object, this.predicate, this.templateScope, this.ignoreMissing, this.params);
        }).bind(this));
    }

    @observe('object,predicate,templateScope,ignoreMissing,params')
    _draw(object, predicate, templateScope, ignoreMissing, params) {
        var templates = this._getTemplates('view') || [];
        var found;
        var elementRoot = Polymer.dom(this.root);
        alert(Array.prototype.map.call(templates, function (t) {
            return t.id;
        }));
        while (elementRoot.firstChild) {
            elementRoot.removeChild(elementRoot.firstChild);
        }

        for (var i = 0; i < templates.length; i++) {
            var template = templates[i];

            if (!template.isMatch) continue;

            if (!template.isMatch(object, predicate, templateScope)) continue;

            found = true;

            if (template.name) {
                this.setAttribute('data-template', template.name);
            }

            this.getStamped(this, template, object)
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

AgsView.register();