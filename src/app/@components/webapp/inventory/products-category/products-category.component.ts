import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { Subscription } from 'rxjs';
import * as ProductCategoryActions from 'src/app/@core/stores/product-category/product-category.actions';
import { ProductCategoryService } from 'src/app/@core/services/product-category.service';
import { ProductCategory } from 'src/app/@core/interfaces/product-category.interface';
import * as fromApp from 'src/app/@core/stores/app/app.reducer';
import * as productCategorySelectors from 'src/app/@core/stores/product-category/product-category.selectors';

// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss'],
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  constructor(
    public dialog: MatDialog,
    private store: Store<fromApp.AppState>,
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

  dataSource!: ProductCategory[];

  ngOnInit(): void {
    // this.datasource = dummyData;

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
        }
      })
    );
  }

  getProductsCategory() {
    this.store.dispatch(ProductCategoryActions.getProductCategory());
  }

  listenToGetProductCategory() {
    this.subscription.add(
      this.store
        .select(productCategorySelectors.fetchProductCategory)
        .subscribe((data) => {
          this.dataSource = data;
        })
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
