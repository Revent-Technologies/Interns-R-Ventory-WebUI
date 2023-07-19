import { createReducer, on } from '@ngrx/store';
import { Warehouse } from '../../interfaces';
import * as WarehouseActions from './warehouse.actions';

export interface State {
  warehouses: Warehouse[];
  loading: boolean;
}

export const initialState: State = {
  warehouses: [],
  loading: false,
};

export const warehouseReducer = createReducer(
  initialState,
  on(WarehouseActions.loadWarehouses, (state) => ({
    ...state,
    loading: true,
  })),
  on(WarehouseActions.WarehousesLoaded, (state, { warehouses }) => ({
    ...state,
    warehouses,
    loading: false,
  }))
);
