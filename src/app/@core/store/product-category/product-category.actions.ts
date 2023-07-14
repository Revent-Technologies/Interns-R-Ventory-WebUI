import { createAction, props } from '@ngrx/store';
import { ProductCategory } from '../../interfaces/product-category.interface';

export const getProductCategory = createAction(
  '[Product Category] Get Product Category'
);

export const getProductCategorySuccessful = createAction(
  '[Product Category]  Get Product Successful',
  props<{ category: ProductCategory[] }>()
);
