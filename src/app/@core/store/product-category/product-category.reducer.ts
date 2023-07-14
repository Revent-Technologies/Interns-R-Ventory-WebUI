import { createReducer, on } from '@ngrx/store';
import { initialState } from './product-category.state';
import * as fromProductCategoryActions from './product-category.actions';

const _productCategoryReducer = createReducer(
  initialState,
  on(
    fromProductCategoryActions.getProductCategorySuccessful,
    (state, action) => {
      return {
        ...state,
        category: action.category,
      };
    }
  )
);

export function ProductCategoryReducer(state: any, action: any) {
  return _productCategoryReducer(state, action);
}
