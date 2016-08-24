export var TemplateRegistryAccess = {
    _getTemplates(kind) {
        var filter = Array.prototype.filter;
        return filter.call(document.querySelectorAll('body /deep/ template'), function(template) {
            return template.kind === kind && template.isMatch && typeof template.isMatch === 'function';
        });
    }
};