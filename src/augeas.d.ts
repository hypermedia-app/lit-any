interface IContract {
    title: String;
    description: String;
    body: Array<IFieldContract>;
}

interface IFieldContract {
    property: String;
    range: String;
    required: Boolean;
    title: String;
    description: String;
}