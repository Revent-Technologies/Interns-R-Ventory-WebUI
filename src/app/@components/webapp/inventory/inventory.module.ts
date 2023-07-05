import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/@core/styles/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { NewWarehouseComponent } from './warehouse/new-warehouse/new-warehouse.component';

@NgModule({
  declarations: [WarehouseComponent, NewWarehouseComponent],
  imports: [CommonModule, InventoryRoutingModule, MaterialModule,ReactiveFormsModule],
  exports: [WarehouseComponent],
})
export class InventoryModule {}
