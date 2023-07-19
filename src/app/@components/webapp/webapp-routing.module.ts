import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebappComponent } from './webapp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/app/@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: WebappComponent,
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: 'Dashboard' },
        canActivate: [AuthGuard],
      },
      {
        path: 'sales',
        data: { breadcrumb: 'Sales' },
        loadChildren: () =>
          import('src/app/@components/webapp/sales/sales.module').then(
            (m) => m.SalesModule),
      },
      {
        path: 'procurement',
        data: { breadcrumb: 'Procurement' },
        canActivate: [AuthGuard],

        loadChildren: () =>
          import(
            'src/app/@components/webapp/procurement/procurement.module'
          ).then((m) => m.ProcurementModule),
      },
      
      {
        path: 'inventory',
        data: { breadcrumb: 'Inventory' },
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('src/app/@components/webapp/inventory/inventory.module').then(
            (m) => m.InventoryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebappRoutingModule { }
