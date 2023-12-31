import { NgModule } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as VendorActions from './vendors.actions';
import { map, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../../interfaces/vendor.interface';
import { environment } from 'src/environments/environment';

@NgModule()
export class VendorsEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getVendors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VendorActions.GetVendors),
      mergeMap((actions) => {
        return this.http.get<Vendor[]>(`${environment.vendors}`).pipe(
          map((vendors) => {
            return VendorActions.GetVendorsSuccessful({ vendors: vendors });
          })
        );
      })
    );
  });
}
