import {AgsViewTemplate} from '../view-template-registry';

@behavior(AgsViewTemplate)
@extend('template')
export class AgsArrayTemplate {
    objectMatches(res) {
        return Array.isArray(res);
    }
}
