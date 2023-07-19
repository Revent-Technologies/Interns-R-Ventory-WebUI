import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
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
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers.routing-module';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomersComponent, AddNewCustomerComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomersRoutingModule,
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
    RouterModule
  ],
  exports: [CustomersComponent],
})
export class CustomersModule {}
