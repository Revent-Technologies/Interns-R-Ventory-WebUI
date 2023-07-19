import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  {
    path: '',
    component: SalesComponent,
    children: [
      {
        path: 'customers',
        data: { breadcrumb: 'Customers' },
        loadChildren: () =>
          import(
            'src/app/@components/webapp/sales/customers/customers.module'
          ).then((m) => m.CustomersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
