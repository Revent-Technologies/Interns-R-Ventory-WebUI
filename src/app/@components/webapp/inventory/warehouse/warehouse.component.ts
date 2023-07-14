import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { Subscription } from 'rxjs';
import { WarehouseService } from 'src/app/@core/services/warehouse.service';
import { Warehouse } from 'src/app/@core/interfaces';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements OnInit {
  subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private warehouseService: WarehouseService
  ) {}

  displayedColumns: string[] = [
    'check',
    'categoriesName',
    'createdBy',
    'date',
    'updatedBy',
    'updateDate',
    'status',
    'action',
  ];

  dataSource: Warehouse[] = [];

  ngOnInit() {
    this.subscription.add(
      this.warehouseService.getWarehouses().subscribe((warehouses) => {
        this.dataSource = warehouses;
      })
    );
  }

  openDialogNew() {
    this.dialog.open(NewWarehouseComponent, {
      data: {},
      disableClose: true,
      autoFocus: true,
      panelClass: 'zns-dialog',
      backdropClass: 'zns-dialog-backdrop',
    });
  }

  editWarehouse(row: any) {
    this.dialog.open(NewWarehouseComponent, {
      data: row,
      disableClose: true,
      autoFocus: true,
      panelClass: 'zns-dialog',
      backdropClass: 'zns-dialog-backdrop',
    });
  }
}
