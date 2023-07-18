import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { Subscription } from 'rxjs';
import * as ProductCategoryActions from 'src/app/@core/store/product-category/product-category.actions';
import { ProductCategoryService } from 'src/app/@core/services/product-category.service';
import { ProductCategory } from 'src/app/@core/interfaces/product-category.interface';
import { AuthService } from 'src/app/@core/services/auth.service';
import * as fromApp from 'src/app/@core/store/app/app.reducer';

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

  datasource!: ProductCategory[];

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
      this.store.select('productCategory').subscribe((data) => {
        this.datasource = data.productCategory;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
