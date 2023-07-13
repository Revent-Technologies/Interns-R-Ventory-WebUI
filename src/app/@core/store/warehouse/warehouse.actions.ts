import { createAction, props } from "@ngrx/store";
import { Warehouse } from "../../interfaces/warehouse.interface";

export const loadWarehouses = createAction('[Warehouse] Load Warehouse');
export const WarehousesLoaded = createAction('[Warehouse] Warehouses Loaded', props<{ warehouses: Warehouse[] }>());

