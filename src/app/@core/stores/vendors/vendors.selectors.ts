import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromVendors from './vendors.reducer';

export const getVendorState =
  createFeatureSelector<fromVendors.State>('vendors');

export const getVendors = createSelector(getVendorState, (state) => {
  return state.vendors;
});
