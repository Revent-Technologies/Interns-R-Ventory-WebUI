import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductCategoryService } from '../../services/product-category.service';
import {
  getProductCategory,
  getProductCategorySuccessful,
} from './product-category.actions';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class ProductCategoryEffects {
  constructor(
    private actions$: Actions,
    private productCategoryService: ProductCategoryService
  ) {}

  getCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductCategory),
      mergeMap((action) => {
        return this.productCategoryService.fetchCategory().pipe(
          map((data) => {
            console.log(data);
            return getProductCategorySuccessful({ category: data });
          })
        );
      })
    );
  });
}