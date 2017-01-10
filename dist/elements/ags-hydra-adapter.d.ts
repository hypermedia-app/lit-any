import { IContract } from '../interfaces';
import { IOperation } from 'heracles';
export declare class AgsHydraAdapter {
    operation: IOperation;
    contract(operation: IOperation): IContract;
}
