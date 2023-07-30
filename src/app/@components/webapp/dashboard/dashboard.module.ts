import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/@core/guards/auth.guard';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
  ],
  exports: [RouterModule],
})
export class DashboardModule {}
