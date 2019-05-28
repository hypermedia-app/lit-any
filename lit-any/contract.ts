export interface IContract {
    title: string;
    description: string;
    body: IFieldContract[];
}

export interface IFieldContract {
    property: string;
    range: string;
    required: boolean;
    title: string;
    description: string;
}
