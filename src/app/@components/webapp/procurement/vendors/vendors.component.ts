import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateVendorsComponent } from './create-vendors/create-vendors.component';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/@core/stores/app/app.reducer';
import * as vendorSelectors from 'src/app/@core/stores/vendors/vendors.selectors';
import { Vendor } from 'src/app/@core/interfaces/vendor.interface';
import * as VendorActions from 'src/app/@core/stores/vendors/vendors.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
})
export class VendorsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  constructor(
    public dialog: MatDialog,
    private store: Store<fromApp.AppState>
  ) {}

  // Table data
  displayedColumns: string[] = [
    'check',
    'name',
    'email',
    'phone',
    'orders',
    'ordersTotal',
    'createdDate',
    'status',
    'action',
  ];
  dataSource: MatTableDataSource<Vendor> | null = null;
  dataLength!: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    // Get Vendors
    this.store.dispatch(VendorActions.getVendors());

    // Listen to vendors
    this.store.select(vendorSelectors.getVendors).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLength = data.length;
    });
  }

  openForm() {
    const popup = this.dialog.open(CreateVendorsComponent, {
      backdropClass: 'zns-dialog-backdrop',
      autoFocus: true,
      panelClass: 'zns-dialog',
      disableClose: true,
      data: {
        name: 'Kolawole Omotosho',
        type: 'React',
      },
    });

    this.subscription.add(
      popup.afterClosed().subscribe((data) => {
        if (data) {
          console.log(data.vendorName);
        } else {
          // No data passed
          console.log('No data passed yet');
        }
      })
    );
  }

  filterSearch(data: Event) {
    const value = (data.target as HTMLInputElement).value;

    this.dataSource!.filter = value;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
