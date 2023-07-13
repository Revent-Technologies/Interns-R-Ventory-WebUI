import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Warehouse } from '../interfaces';
import { Store } from '@ngrx/store';
import { WarehouseState } from '../store/warehouse/warehouse.reducer';
import * as WarehouseActions from '../store/warehouse/warehouse.actions';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  private service= 'http://localhost:3000/warehouse';

  constructor(private http: HttpClient, private store: Store<WarehouseState>) {}

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this.service).pipe(
        tap((warehouses) => {
            this.store.dispatch(WarehouseActions.WarehousesLoaded({ warehouses}));
        })
    );
  }
}