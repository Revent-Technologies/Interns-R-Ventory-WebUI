import { createReducer, on } from "@ngrx/store";
import { Warehouse } from "../../interfaces";
import * as WarehouseActions from '../warehouse/warehouse.actions';


export interface WarehouseState {
    warehouses: Warehouse[];
    loading:boolean;
    
}

export const initialState: WarehouseState= {
    warehouses: [],
    loading: false,
};

export const warehouseReducer = createReducer(
    initialState,
    on(WarehouseActions.loadWarehouses,(state) => ({
        ...state,
        loading : true
    })),
    on(WarehouseActions.WarehousesLoaded , ( state,{ warehouses })=>({
        ...state,
        warehouses,
        loading :false,
    })),
);




