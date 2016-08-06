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

    isMatch: function(property, range) {
        var propertyMatches, rangeMatches;

        propertyMatches = isMatch(this.property, property);
        rangeMatches = isMatch(this.range, range);

        return propertyMatches || rangeMatches;
    }
};

function isMatch(thisValue, otherValue) {
    return thisValue && otherValue == thisValue;
}

export var RegisteredTemplate = [ AgsFormTemplate, FormTemplateRegistryAccess ];
export var AgsFieldStamper = [ Polymer.Templatizer, FormTemplateRegistryAccess ];