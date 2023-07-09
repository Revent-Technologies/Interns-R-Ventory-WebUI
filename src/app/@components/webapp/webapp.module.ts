import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebappRoutingModule } from './webapp-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebappComponent } from './webapp.component';
import { HeaderModule } from './header/header.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [WebappComponent, SidebarComponent, DashboardComponent],
  imports: [CommonModule, WebappRoutingModule, MatExpansionModule, HeaderModule],
})
export class WebappModule {}
