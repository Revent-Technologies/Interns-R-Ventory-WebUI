import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWarehouse from './warehouse.reducer';

const getWarehouseState =
  createFeatureSelector<fromWarehouse.State>('warehouse');

export const getWarehouse = createSelector(
  getWarehouseState,
  (state) => state.warehouses
);

export const getWarehouseSuccess = createSelector(
  getWarehouseState,
  (state) => state.loading
);

export const getNewWarehouse = createSelector(
  getWarehouseState,
  (state) => state.newWarehouse
);
