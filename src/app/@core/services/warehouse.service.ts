import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Warehouse } from '../interfaces';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {}
