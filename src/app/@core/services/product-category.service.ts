import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { log } from 'console';
import { Category } from 'src/app/@components/webapp/inventory/products-category/products-category.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  constructor(private http: HttpClient) {}

  fetchCategory() {
    return this.http.get<Category[]>(`${environment.productCategory}`);
  }
}
