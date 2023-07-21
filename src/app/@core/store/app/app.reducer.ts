import { ActionReducerMap } from '@ngrx/store';

import * as fromWarehouse from '../warehouse/warehouse.reducer';

export interface AppState {
  warehouse: fromWarehouse.State;
  
}

export const appReducer: ActionReducerMap<AppState> = {
  warehouse: fromWarehouse.warehouseReducer,
};
