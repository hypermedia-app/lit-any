interface IContract {
    body: Array<IFieldContract>;
}

interface IFieldContract {
    property: String,
    range: String,
    required: Boolean
}