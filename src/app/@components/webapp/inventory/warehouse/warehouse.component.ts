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
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements OnInit {
  subscription = new Subscription();
  dataSource: MatTableDataSource<Warehouse> | null = null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) tableSort!: MatSort;
  selection = new SelectionModel<Warehouse>(true, []);
  filterValue: string = '';

  constructor(
    public dialog: MatDialog,
    private warehouseService: WarehouseService,
    private store: Store<fromApp.AppState>,
    private snackBar: MatSnackBar
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

  // dataSource!: Warehouse[];

  ngOnInit() {
    this.store.dispatch(WarehouseActions.LoadWarehouse());

    this.store.select(fromWarehouse.getWarehouse).subscribe((data) => {
      // this.dataSource = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.tableSort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource!.filter = filterValue;
    // this.dataSource!.filter = filterValue.trim().toLowerCase();
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
    row.check = !row.check;
    this.dialog.open(NewWarehouseComponent, {
      data: row,
      disableClose: true,
      autoFocus: true,
      panelClass: 'zns-dialog',
      backdropClass: 'zns-dialog-backdrop',
    });
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource!.data);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
