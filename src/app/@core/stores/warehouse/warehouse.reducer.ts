import { Action, createReducer, on } from '@ngrx/store';
import { Warehouse } from '../../interfaces';
import * as WarehouseActions from './warehouse.actions';
export interface State {
  newWarehouse: any;
  warehouses: Warehouse[];
  loading: boolean;
}

export const initialState: State = {
  warehouses: [],
  loading: false,
  newWarehouse: null
};

const warehouseReducerInternal = createReducer(
  initialState,
  on(WarehouseActions.LoadWarehouse, (state) => ({
    ...state,
    loading: true,
  })),

  on(WarehouseActions.LoadWarehouseSuccess, (state, action) => ({
    ...state,
    warehouses: action.payload,
    loading: false,
  })),

  on(WarehouseActions.AddWarehouse, (state) => ({
    ...state,
    loading: true,
  })),

  on(WarehouseActions.AddWarehouseSuccess, (state, action) => ({

    ...state,
    warehouses: [...state.warehouses, action.warehouse],
    loading: false,
  })),

  
 
 

);

export function warehouseReducer(state: State | undefined, action: Action) {
  return warehouseReducerInternal(state, action);
}
