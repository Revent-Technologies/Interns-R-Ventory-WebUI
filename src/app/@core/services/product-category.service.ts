import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductCategory } from '../interfaces/product-category.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  constructor(private http: HttpClient) {}

  fetchCategory() {
    return this.http.get<ProductCategory[]>(`${environment.product_category}`);
  }
}
