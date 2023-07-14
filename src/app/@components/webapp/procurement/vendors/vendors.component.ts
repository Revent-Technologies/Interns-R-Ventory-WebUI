import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateVendorsComponent } from './create-vendors/create-vendors.component';
import { Subscription } from 'rxjs';

export interface Category {
  check: boolean;
  name: string;
  email: string;
  phone: string;
  orders: number;
  ordersTotal: number;
  createdDate: Date;
  status: boolean;
  action: boolean;
}

const dummyData: Category[] = [
  {
    check: true,
    name: 'Faruq Olaseni',
    email: 'Janet@gmail.com',
    phone: '+2348028397558',
    orders: 10,
    ordersTotal: 2500000,
    createdDate: new Date(),
    status: true,
    action: true,
  },
  {
    check: true,
    name: 'Faruq Olaseni',
    email: 'Janet@gmail.com',
    phone: '+2348028397558',
    orders: 10,
    ordersTotal: 2500000,
    createdDate: new Date(),
    status: false,
    action: true,
  },
  {
    check: true,
    name: 'Faruq Olaseni',
    email: 'Janet@gmail.com',
    phone: '+2348028397558',
    orders: 10,
    ordersTotal: 2500000,
    createdDate: new Date(),
    status: false,
    action: true,
  },
  {
    check: true,
    name: 'Faruq Olaseni',
    email: 'Janet@gmail.com',
    phone: '+2348028397558',
    orders: 10,
    ordersTotal: 2500000,
    createdDate: new Date(),
    status: true,
    action: false,
  },
  {
    check: true,
    name: 'Faruq Olaseni',
    email: 'Janet@gmail.com',
    phone: '+2348028397558',
    orders: 10,
    ordersTotal: 2500000,
    createdDate: new Date(),
    status: true,
    action: true,
  },
  {
    check: true,
    name: 'Faruq Olaseni',
    email: 'Janet@gmail.com',
    phone: '+2348028397558',
    orders: 10,
    ordersTotal: 2500000,
    createdDate: new Date(),
    status: false,
    action: false,
  },
  {
    check: true,
    name: 'Faruq Olaseni',
    email: 'Janet@gmail.com',
    phone: '+2348028397558',
    orders: 10,
    ordersTotal: 2500000,
    createdDate: new Date(),
    status: true,
    action: false,
  },
  {
    check: true,
    name: 'Faruq Olaseni',
    email: 'Janet@gmail.com',
    phone: '+2348028397558',
    orders: 10,
    ordersTotal: 2500000,
    createdDate: new Date(),
    status: false,
    action: true,
  },
];

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
})
export class VendorsComponent implements OnInit {
  subscription = new Subscription();
  constructor(public dialog: MatDialog) {}

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
  datasource: Category[] = [];

  ngOnInit(): void {
    this.datasource = dummyData;
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
          console.log('No data passed yet');
        }
      })
    );
  }
}
