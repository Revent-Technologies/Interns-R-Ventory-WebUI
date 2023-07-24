import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './warehouse.component';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderModule } from '../../header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarehouseRoutingModule } from './warehouse-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule,} from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { MatSortModule } from '@angular/material/sort';
import { EffectsModule } from '@ngrx/effects';

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
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    // EffectsModule.forFeature([
    //   fromWarehouseEffects.WarehouseEffects,
    // ]),
   
   

  ],
  exports: [WarehouseComponent],
})
export class WarehouseModule {}
