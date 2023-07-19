import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcurementComponent } from './procurement.component';
import { ProcurementRoutingModule } from './procurement-routing.module';

@NgModule({
  declarations: [ProcurementComponent],
  imports: [CommonModule, ProcurementRoutingModule],
  exports: [],
})
export class ProcurementModule {}
