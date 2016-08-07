@component('ags-hydra-adapter')
export class AgsHydraAdapter extends polymer.Base {

    @property()
    operation: IOperation;

    @computed({ notify: true })
    contract(operation: IOperation): IContract {
        var contract: IContract = <IContract>{};

        contract.title = operation.title;
        contract.description = operation.description;
        contract.body = operation.expects.supportedProperties
            .filter(prop => prop.writable)
            .map(transformSupportedProperty);

        return contract;
    }
}

function transformSupportedProperty(prop: ISupportedProperty): IFieldContract {
    var fieldContract = <IFieldContract>{};

    fieldContract.property = prop.property.id;
    fieldContract.range = prop.property.range.id;
    fieldContract.required = prop.required;
    fieldContract.title = prop.title;
    fieldContract.description = prop.description;

    return fieldContract;
}

AgsHydraAdapter.register();