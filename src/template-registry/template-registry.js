import {TemplateResult} from 'lit-html';

export class Template {
    get name() {
        return '';
    }

    template(object) {}

    matches(object, predicate, scope) {}
}

export class TemplateRegistry {

    constructor() {
        this._templates = [];
    }

    getTemplate(object, predicate, scope) {
        return this._templates.find(template => {
            return template.matches(object, predicate, scope);
        });
    }

    push(template) {
        this._templates.push(template);
    }

    _clear() {
        this._templates = [];
    }
}


