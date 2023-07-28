import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/auth.reducers';
import * as fromProductCategory from '../product-category/product-category.reducer';
import * as fromVendor from '../vendors/vendors.reducer';
import * as fromWarehouse from '../warehouse/warehouse.reducer';
// import * as fromNotification from '../notification/notification.reducer'
export interface AppState {
  auth: fromAuth.State;
  productCategory: fromProductCategory.State;
  vendors: fromVendor.State;
  warehouse: fromWarehouse.State;
  // notification: fromNotification.State
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  productCategory: fromProductCategory.ProductCategoryReducer,
  vendors: fromVendor.vendorsReducer,
  warehouse: fromWarehouse.warehouseReducer,
  // notification: fromNotification.notificationReducer
};
