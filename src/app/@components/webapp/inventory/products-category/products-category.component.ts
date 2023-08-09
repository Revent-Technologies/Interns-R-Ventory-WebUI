import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { Subscription } from 'rxjs';
import * as ProductCategoryActions from 'src/app/@core/stores/product-category/product-category.actions';
import { ProductCategoryService } from 'src/app/@core/services/product-category.service';
import { ProductCategory } from 'src/app/@core/interfaces/product-category.interface';
import * as fromApp from 'src/app/@core/stores/app/app.reducer';
import * as productCategorySelectors from 'src/app/@core/stores/product-category/product-category.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss'],
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  currentLength!: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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

  dataSource: MatTableDataSource<ProductCategory> | null = null;

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
          let sending: ProductCategory = {
            id: this.currentLength + 1,
            check: false,
            category: data.categoryName,
            createdBy: 'Kola',
            date: new Date().getTime().toString(),
            lastToUpdate: 'Kola',
            updated: new Date().getTime().toString(),
            status: true,
            action: false,
          };

          this.store.dispatch(
            ProductCategoryActions.StartAddNewProductCategory({
              payload: sending,
            })
          );

          this.getProductsCategory();
        }
      })
    );
  }

  getProductsCategory() {
    this.store.dispatch(ProductCategoryActions.GetProductCategory());
  }

  listenToGetProductCategory() {
    this.subscription.add(
      this.store
        .select(productCategorySelectors.fetchProductCategory)
        .subscribe((data: ProductCategory[]) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.currentLength = data.length;
        })
    );
  }

  filterSearch(data: Event) {
    const value = (data.target as HTMLInputElement).value;

    this.dataSource!.filter = value;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
