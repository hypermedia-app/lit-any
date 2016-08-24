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

    isMatch: function(property, range) {
        return false;
    }
};

export var AgsFieldStamper = [ Polymer.Templatizer, TemplateRegistryAccess ];