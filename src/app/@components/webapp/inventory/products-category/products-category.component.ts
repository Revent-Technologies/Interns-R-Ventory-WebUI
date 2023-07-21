import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductCategoryReducer } from 'src/app/@core/store/product-category/product-category.reducer';

import { MatDialog } from '@angular/material/dialog';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { Subscription } from 'rxjs';
import * as fromProductCategoryActions from 'src/app/@core/store/product-category/product-category.actions';
import { ProductCategoryService } from 'src/app/@core/services/product-category.service';
import { ProductCategory } from 'src/app/@core/interfaces/product-category.interface';

// import { MatTableDataSource } from '@angular/material/table';

export interface Category {
  id: number;
  check: boolean;
  category: string;
  createdBy: string;
  date: string;
  lastToUpdate: string;
  updated: string;
  status: boolean;
  action: boolean;
}



@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss'],
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  constructor(
    public dialog: MatDialog,
    private store: Store<{ productCategory: { category: ProductCategory[] } }>,
    private pc: ProductCategoryService
  ) {}

  // Table data
  displayedColumns: string[] = [
    'check',
    'category',
    'createdBy',
    'date',
    'lastToUpdate',
    'updated',
    'status',
    'action',
  ];

  datasource!: ProductCategory[];

  ngOnInit(): void {
    this.getProductsCategory();
    this.listenToGetProductCategory();
  }

  openForm() {
    const popUp = this.dialog.open(AddNewCategoryComponent, {
      backdropClass: 'zns-dialog-backdrop',
      autoFocus: true,
      panelClass: 'zns-dialog',
      disableClose: true,

      data: {
        name: 'Omotosho Kolawole',
        type: 'Angular',
      },
    });

    this.subscription.add(
      popUp.afterClosed().subscribe((data) => {
        if (data) {
          console.log(data.categoryName);
        } else {
          console.log('No data passed');
        }
      })
    );
  }

  getProductsCategory() {
    this.store.dispatch(fromProductCategoryActions.getProductCategory());
  }

  listenToGetProductCategory() {
    this.subscription.add(
      this.store.select('productCategory').subscribe((data) => {
        console.log(data);
        this.datasource = data.category;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
