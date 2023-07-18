import { ActionReducerMap } from '@ngrx/store';
import * as fromProductCategory from '../product-category/product-category.reducer';
import * as fromWarehouse from '../warehouse/warehouse.reducer';

export interface AppState {
  productCategory: fromProductCategory.ProductCategoryState;
  warehouse: fromWarehouse.WarehouseState;
}

export const appReducer: ActionReducerMap<AppState> = {
  productCategory: fromProductCategory.ProductCategoryReducer,
  warehouse: fromWarehouse.warehouseReducer,
};
