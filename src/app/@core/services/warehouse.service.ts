import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Warehouse } from '../interfaces/warehouse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  // constructor(private http: HttpClient) {}

  // fetchWarehouse() {
  //   return this.http.get<Warehouse[]>(`${environment.warehouse}`);
  // }
}
