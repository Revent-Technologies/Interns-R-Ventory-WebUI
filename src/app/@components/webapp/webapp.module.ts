import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebappRoutingModule } from './webapp-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebappComponent } from './webapp.component';
import { HeaderModule } from './header/header.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EffectsModule } from '@ngrx/effects';
import * as fromWarehouseEffects from 'src/app/@core/store/warehouse/warehouse.effects';

@NgModule({
  declarations: [WebappComponent, SidebarComponent, DashboardComponent],
  imports: [
    CommonModule,
    WebappRoutingModule,
    MatExpansionModule,
    HeaderModule,
    EffectsModule.forFeature([fromWarehouseEffects.WarehouseEffects]),
  ],
})
export class WebappModule {}
