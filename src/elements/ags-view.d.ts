import "link!../behaviors/RegisteredTemplateConsumer.html";
/**
 *
 */
export declare class AgsView {
    object: Object;
    predicate: String;
    templateScope: String;
    ignoreMissing: Boolean;
    readonly hasBeenRendered: Boolean;
    params: Object;
    connectedCallback(): void;
    _draw(object: any, predicate: any, templateScope: any, ignoreMissing: any, params: any): void;
}
