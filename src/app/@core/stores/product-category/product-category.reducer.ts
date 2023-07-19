import { Action, createReducer, on } from '@ngrx/store';
import * as fromProductCategoryActions from './product-category.actions';
import { ProductCategory } from '../../interfaces/product-category.interface';

export interface State {
  productCategory: ProductCategory[];
}

const initialState: State = {
  productCategory: [],
};

const productCategoryReducerInternal = createReducer(
  initialState,
  on(
    fromProductCategoryActions.getProductCategorySuccessful,
    (state, { category }) => {
      return {
        ...state,
        productCategory: category,
      };
    }
  )
);

export function ProductCategoryReducer(
  state: State | undefined,
  action: Action
) {
  return productCategoryReducerInternal(state, action);
}
