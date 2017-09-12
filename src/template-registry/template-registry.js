import TemplateSelectorBuilder from './TemplateSelectorBuilder';

export default class TemplateRegistry {
    constructor() {
        this._templates = [];
    }

    get count() {
        return this._templates.length;
    }

    /**
     *
     * @returns {TemplateSelectorBuilder}
     */
    get when() {
        return new TemplateSelectorBuilder(this);
    }

    getTemplate(value, predicate, scope) {
        const selectedTemplate = this._templates.find(template =>
            template.selector.matches(value, predicate, scope));

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
