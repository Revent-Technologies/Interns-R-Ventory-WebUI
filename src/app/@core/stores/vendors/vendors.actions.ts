import { createAction, props } from '@ngrx/store';
import { Vendor } from '../../interfaces/vendor.interface';

export const GetVendors = createAction('[Vendors] Get Vendors');

export const GetVendorsSuccessful = createAction(
  '[vendors] Get Vendors Successful',
  props<{ vendors: Vendor[] }>()
);
