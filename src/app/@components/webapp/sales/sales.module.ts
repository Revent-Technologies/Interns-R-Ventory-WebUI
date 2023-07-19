import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales.routing-module';

@NgModule({
  declarations: [SalesComponent],
  imports: [CommonModule, SalesRoutingModule],
  exports: [],
})
export class SalesModule {}
