import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProductCategoryState from './product-category.state';

const getProductCategoryState =
  createFeatureSelector<fromProductCategoryState.ProductCategoryState>(
    'productCategory'
  );

export const fetchProductCategory = createSelector(
  getProductCategoryState,
  (state) => {
    return state.productCategory;
  }
);
