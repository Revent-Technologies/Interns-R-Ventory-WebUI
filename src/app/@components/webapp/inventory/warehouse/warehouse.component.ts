import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { Subscription } from 'rxjs';
import { WarehouseService } from 'src/app/@core/services/warehouse.service';
import { Warehouse } from 'src/app/@core/interfaces';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../@core/stores/app/app.reducer';
import * as WarehouseActions from 'src/app/@core/stores/warehouse/warehouse.actions';
import * as fromWarehouse from 'src/app/@core/stores/warehouse/warehouse.selector';




@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements OnInit {
  subscription = new Subscription();


  
  constructor(
    public dialog: MatDialog,
    private warehouseService: WarehouseService,
    private store: Store<fromApp.AppState>
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

  dataSource!: Warehouse[];

  ngOnInit() {
    this.store.dispatch(WarehouseActions.LoadWarehouse());

    this.store.select(fromWarehouse.getWarehouse).subscribe((data) => {
      this.dataSource = data;
    });
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
