import { Component, OnInit } from '@angular/core';

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
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

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

  constructor() {}

  ngOnInit(): void {
    this.datasource = dummyData;
  }
}