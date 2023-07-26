import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InventoryRoutingModule } from './inventory-routing.module';
import { HeaderModule } from '../header/header.module';
import { ProductsCategoryModule } from './products-category/products-category.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { InventoryComponent } from './inventory.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NotificationModule } from 'src/app/@core/shared/notification/notification.module';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    ProductsCategoryModule,
    WarehouseModule,
    RouterModule,
    HttpClientModule,
    NotificationModule
  ],
})
export class InventoryModule {}
