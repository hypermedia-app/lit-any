import { IFieldContract, IContract } from '../interfaces';
import { IOperation, ISupportedProperty } from 'heracles';
import {notify, computed} from "twc/annotations/polymer";

export class AgsHydraAdapter {

    operation: IOperation;

    //@notify
    @computed
    contract(operation: IOperation): IContract {
        const contract: IContract = <IContract>{};

        contract.title = operation.title;
        contract.description = operation.description;
        contract.body = ((operation.expects || {}).supportedProperties || [])
            .filter(prop => prop.writable)
            .map(transformSupportedProperty);

        return contract;
    }
}

function transformSupportedProperty(prop: ISupportedProperty): IFieldContract {
    const fieldContract = <IFieldContract>{};

    fieldContract.property = prop.property.id;
    fieldContract.range = prop.property.range.id;
    fieldContract.required = prop.required;
    fieldContract.title = prop.title;
    fieldContract.description = prop.description;

    return fieldContract;
}
