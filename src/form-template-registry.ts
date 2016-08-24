import {TemplateRegistryAccess} from './template-registry';

export var AgsFormTemplate = {
    properties: {
        property: {
            type: String
        },
        range: {
            type: String
        },
        kind: {
            readOnly: true,
            value: 'form'
        }
    },

    attached: function() {
        this.fire('ags-form-templates-changed', { }, { bubbles: true });
    },

    detached: function() {
        document.dispatchEvent(new CustomEvent('ags-form-templates-changed'));
    },

    isMatch: function(property, range) {
        return false;
    }
};

export var AgsFieldStamper = [ Polymer.Templatizer, TemplateRegistryAccess ];