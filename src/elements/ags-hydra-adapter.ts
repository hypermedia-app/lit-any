@component('ags-hydra-adapter')
export class AgsHydraAdapter extends polymer.Base {

    @property()
    operation: IOperation;

    @computed()
    contract(operation: IOperation): IContract {
        var contract:IContract = <IContract>{};

        contract.body = operation.expects.supportedProperties.map(prop => {
            var fieldContract = <IFieldContract>{};

            fieldContract.property = prop.property.id;
            fieldContract.range = prop.property.range.id;
            fieldContract.required = prop.required;

            return fieldContract;
        });

        return contract;
    }
}

AgsHydraAdapter.register();