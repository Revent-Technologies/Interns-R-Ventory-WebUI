import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCategoryComponent } from './products-category.component';
import { HeaderModule } from '../../header/header.module';
import { ProductCategoryRoutingModule } from './products-category-routing.module';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ProductsCategoryComponent, AddNewCategoryComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ProductCategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatSlideToggleModule,
    MatPaginatorModule,
  ],
  exports: [ProductsCategoryComponent],
  entryComponents: [AddNewCategoryComponent],
})
export class ProductsCategoryModule {}
