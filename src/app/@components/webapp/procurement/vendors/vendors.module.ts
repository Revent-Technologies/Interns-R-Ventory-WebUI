import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsRoutingModule } from './vendors-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { VendorsComponent } from './vendors.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { HeaderModule } from '../../header/header.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateVendorsComponent } from './create-vendors/create-vendors.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { VendorsEffects } from 'src/app/@core/stores/vendors/vendors.effects';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [VendorsComponent, CreateVendorsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VendorsRoutingModule,
    HeaderModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatSortModule,

    EffectsModule.forFeature([VendorsEffects]),
  ],
  exports: [VendorsComponent],
  entryComponents: [CreateVendorsComponent],
})
export class VendorsModule {}
