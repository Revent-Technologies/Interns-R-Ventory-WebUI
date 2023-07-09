import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './warehouse.component';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderModule } from '../../header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarehouseRoutingModule } from './warehouse-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [WarehouseComponent, NewWarehouseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    MatToolbarModule,
    MatDialogModule,
    WarehouseRoutingModule,
  ],
  exports: [WarehouseComponent],
})
export class WarehouseModule {}
