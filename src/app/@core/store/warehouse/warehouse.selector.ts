import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WarehouseState } from "./warehouse.reducer";

export const selectWarehouseState = createFeatureSelector<WarehouseState>(
    "warehouse"
);

export const selectWarehouses = createSelector(
    selectWarehouseState,
    (state) => state.warehouses
);

export const selectLoading = createSelector(
    selectWarehouseState,
    (state) => state.loading
);