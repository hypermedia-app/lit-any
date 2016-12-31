export declare class AgsField {
    'property': String;
    range: String;
    value: any;
    noTemplateFound: Boolean;
    required: Boolean;
    ready(): void;
    _valueChanged(newValue: any): void;
    _draw(property: any, range: any): void;
    _forwardInstanceProp(inst: any, path: any, value: any): void;
}
