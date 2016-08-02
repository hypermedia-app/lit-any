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
        }
    },

    attached: function() {
        this.push('templates', this);
    },

    detached: function() {
        this.pop('templates', this);
    },

    isMatch: function(property) {
        var propertyMatches;

        propertyMatches = this.propertyMatches(property);

        return propertyMatches;
    },

    propertyMatches(property) {
        return property == this.property;
    }
};

export var RegisteredTemplate = [ AgsFormTemplate, FormTemplateRegistryAccess ];
export var AgsFieldStamper = [ Polymer.Templatizer, FormTemplateRegistryAccess ];