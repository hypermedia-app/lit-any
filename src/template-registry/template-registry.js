import 'core-js/modules/es6.array.find';

export default class TemplateRegistry {
    constructor(Builder) {
        this._templates = [];
        this._builder = Builder;
    }

    get count() {
        return this._templates.length;
    }

    /**
     *
     * @returns {TemplateSelectorBuilder}
     */
    get when() {
        return new this._builder(this);
    }

    getTemplate(criteria) {
        let selectedTemplate;
        if (criteria !== null && typeof criteria !== 'undefined') {
            selectedTemplate = this._templates.find(template =>
                template.selector.matches(criteria));
        }

        if (!selectedTemplate) {
            return null;
        }

        return {
            render: selectedTemplate.templateFunc,
            name: selectedTemplate.name || null,
        };
    }

    push(selector, templateFuncOrResult, name) {
        let templateFunc = templateFuncOrResult;

        if (typeof templateFunc !== 'function') {
            templateFunc = () => templateFuncOrResult;
        }

        this._templates.push({
            selector,
            templateFunc,
            name,
        });
    }
}
