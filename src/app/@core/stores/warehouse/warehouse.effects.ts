import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as WarehouseActions from '../warehouse/warehouse.actions';
import { concatMap, map, mergeMap, tap } from 'rxjs';
import { Warehouse } from '../../interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class WarehouseEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  private warehouse = 'http://localhost:3000/warehouse';

  loadWarehouse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WarehouseActions.LoadWarehouse),
      mergeMap((action) => {
        return this.http.get<Warehouse[]>(`${environment.warehouse}`).pipe(
          map((data) => {
            // console.log(data);
            return WarehouseActions.LoadWarehouseSuccess({ payload: data });
          })
        );
      })
    );
  });

  addWarehouse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WarehouseActions.AddWarehouse),
      concatMap((action) =>
        this.http
          .post<Warehouse>(`${environment.warehouse}`, action.newWarehouse)
          .pipe(
            map((data) =>
              WarehouseActions.AddWarehouseSuccess({ warehouse: data })
            )
          )
      )
    );
  });

  // LoadWarehouse$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(WarehouseActions.LoadWarehouse),
  //     mergeMap(() =>
  //       return this.http
  //         .get<Warehouse[]>(`${environment.warehouse}`)
  //         .pipe(
  //           map((response) => {}
  //             WarehouseActions.LoadWarehouseSuccess({ payload: response })
  //           )}
  //         )
  //     )
  //   );
  // });
}
