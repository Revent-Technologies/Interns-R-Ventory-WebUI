import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebappRoutingModule } from './webapp-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebappComponent } from './webapp.component';
import { HeaderModule } from './header/header.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { EffectsModule } from '@ngrx/effects';
import * as fromWarehouseEffects from 'src/app/@core/stores/warehouse/warehouse.effects';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [WebappComponent, SidebarComponent],
  imports: [
    CommonModule,
    WebappRoutingModule,
    MatExpansionModule,
    DashboardModule,
    HeaderModule,
    EffectsModule.forFeature([fromWarehouseEffects.WarehouseEffects]),
  ],
})
export class WebappModule {}
