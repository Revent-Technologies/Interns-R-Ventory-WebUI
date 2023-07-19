import { createAction, props } from '@ngrx/store';
import { Vendor } from '../../interfaces/vendor.interface';

export const getVendors = createAction('[Vendors] Get Vendors');

export const getVendorsSuccessful = createAction(
  '[vendors] Get Vendors Successful',
  props<{ vendors: Vendor[] }>()
);
