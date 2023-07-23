import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/@core/guards/auth.guard';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
  ],
  exports: [RouterModule],
})
export class DashboardModule {}
