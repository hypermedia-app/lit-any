import {TemplateResult} from 'lit-html';

export class TemplateRegistry {

    constructor() {
        this._templates = [];
    }

    get count() {
        return this._templates.length;
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


