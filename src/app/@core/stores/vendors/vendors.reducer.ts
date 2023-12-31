import { Action, createReducer, on } from '@ngrx/store';
import { Vendor } from '../../interfaces/vendor.interface';
import { GetVendorsSuccessful } from './vendors.actions';

export interface State {
  vendors: Vendor[];
}

export const initialState: State = {
  vendors: [],
};

const vendorsReducerInternal = createReducer(
  initialState,
  on(GetVendorsSuccessful, (state, action) => {
    return {
      ...state,
      vendors: action.vendors,
    };
  })
);

export function vendorsReducer(state: State | undefined, action: Action) {
  return vendorsReducerInternal(state, action);
}
