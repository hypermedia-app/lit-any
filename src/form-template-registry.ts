var templates = [];

export var FormTemplateRegistryAccess = {
    properties: {
        templates: {
            type: Array,
            notify: true,
            readOnly: true,
            value: templates
        }
    }
};

export var AgsFormTemplate = {
    properties: {
        property: {
            type: String
        },
        range: {
            type: String
        }
    },

    attached: function() {
        this.push('templates', this);
    },

    detached: function() {
        this.pop('templates', this);
    },

    isMatch: function(property, range) {
        return false;
    }
};

export var RegisteredTemplate = [ AgsFormTemplate, FormTemplateRegistryAccess ];
export var AgsFieldStamper = [ Polymer.Templatizer, FormTemplateRegistryAccess ];