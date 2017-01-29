import "link!../behaviors/AgsViewTemplate.html";
export declare class AgsObjectTemplate {
    /**
     * If truthy, it will be used as `@context` in JSON-LD API to compact the object before
     * binding with the rendered template
     */
    compactWith: Object;
    /**
     * Returns true if the value is a JS object and contains and `@id`
     */
    objectMatches(resource: any): boolean;
}
