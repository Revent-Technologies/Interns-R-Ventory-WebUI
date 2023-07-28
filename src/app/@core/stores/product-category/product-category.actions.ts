import { createAction, props } from '@ngrx/store';
import { ProductCategory } from '../../interfaces/product-category.interface';

export const getProductCategory = createAction(
  '[Product Category] Get Product Category'
);

export const getProductCategorySuccessful = createAction(
  '[Product Category]  Get Product Successful',
  props<{ category: ProductCategory[] }>()
);

export const startAddNewProductCategory = createAction(
  '[Product Category] Add New Product Category',
  props<{ payload: ProductCategory }>()
);

export const addNewProductCategorySuccess = createAction('[Product Category] Add Product Category Success')
export const addNewProductCategoryFailure = createAction('[Product Category] Add Product Category Failure')
