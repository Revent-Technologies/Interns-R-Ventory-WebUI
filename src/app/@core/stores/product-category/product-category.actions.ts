import { createAction, props } from '@ngrx/store';
import { ProductCategory } from '../../interfaces/product-category.interface';

export const GetProductCategory = createAction(
  '[Product Category] Get Product Category'
);

export const GetProductCategorySuccessful = createAction(
  '[Product Category]  Get Product Successful',
  props<{ category: ProductCategory[] }>()
);

export const StartAddNewProductCategory = createAction(
  '[Product Category] Add New Product Category',
  props<{ payload: ProductCategory }>()
);

export const AddNewProductCategorySuccess = createAction('[Product Category] Add Product Category Success')
export const AddNewProductCategoryFailure = createAction('[Product Category] Add Product Category Failure')
