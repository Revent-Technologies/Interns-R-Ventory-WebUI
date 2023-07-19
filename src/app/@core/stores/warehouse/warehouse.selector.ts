import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWarehouse from './warehouse.reducer';


export const selectWarehouseState =
  createFeatureSelector<fromWarehouse.State>('warehouse');

export const selectWarehouses = createSelector(
  selectWarehouseState,
  (state) => state.warehouses
);

export const selectLoading = createSelector(
  selectWarehouseState,
  (state) => state.loading
);
