export class TemplateSelector {
    constructor() {
        this.name = '';
        this._matchers = [];
    }

    matches(criteria) {
        if (this.shouldMatch(criteria) === false) {
            return false;
        }

        return this._matchers.every(matcher => matcher.call(matcher, criteria));
    }

    // eslint-disable-next-line class-methods-use-this
    shouldMatch() {
        return true;
    }
}

export class ViewTemplateSelector extends TemplateSelector {
    // eslint-disable-next-line class-methods-use-this
    shouldMatch(criteria) {
        return typeof criteria.value !== 'undefined' && criteria.value !== null;
    }
}

export class FieldTemplateSelector extends TemplateSelector {
    // eslint-disable-next-line class-methods-use-this
    shouldMatch(criteria) {
        return typeof criteria.field !== 'undefined'
            && criteria.field !== null
            && typeof criteria.field.property !== 'undefined'
            && criteria.field.property !== null;
    }
}
