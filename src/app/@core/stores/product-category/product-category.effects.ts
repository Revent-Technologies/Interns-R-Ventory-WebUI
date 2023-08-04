import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductCategoryActions from './product-category.actions';
import { catchError, map, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductCategory } from '../../interfaces/product-category.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductCategoryEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductCategoryActions.GetProductCategory),
      mergeMap(() => {
        return this.http
          .get<ProductCategory[]>(`${environment.productCategory}`)
          .pipe(
            map((data) => {
<<<<<<< HEAD
              // console.log(data);
=======
>>>>>>> 8445dd6b1388ad8b8666c66aede94492828cbf7e
              return ProductCategoryActions.GetProductCategorySuccessful({
                category: data,
              });
            })
          );
      })
    );
  });

  addNewProductCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductCategoryActions.StartAddNewProductCategory),
      mergeMap((action) => {
        return this.http
          .post(`${environment.productCategory}`, action.payload)
          .pipe(
            map((data) => {
<<<<<<< HEAD
              // console.log(data);
=======
>>>>>>> 8445dd6b1388ad8b8666c66aede94492828cbf7e
              return ProductCategoryActions.AddNewProductCategorySuccess();
            })
          );
      })
    );
  });
}
