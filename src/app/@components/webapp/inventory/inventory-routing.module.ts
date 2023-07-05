import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {
        path: 'products-category',
        component: ProductsCategoryComponent,
        data: { breadcrumb: 'Products Categories' },
      },
      {
        path: 'warehouse',
        component: WarehouseComponent,
        data: { breadcrumb: 'Warehouse' },
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
