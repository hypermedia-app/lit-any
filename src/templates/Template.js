/**
 * Base class for templates
 */
export default class Template {
    get name() {
        return '';
    }

    template(object) {}

    matches(object, predicate, scope) {}
}
