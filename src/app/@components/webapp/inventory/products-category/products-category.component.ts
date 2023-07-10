import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { Subscription } from 'rxjs';
// import { MatTableDataSource } from '@angular/material/table';

export interface Category {
  check: boolean;
  category: string;
  createdBy: string;
  date: Date;
  lastToUpdate: string;
  updated: Date;
  status: boolean;
  action: boolean;
}

const dummyData: Category[] = [
  {
    check: false,
    category: 'Casual Shoes',
    createdBy: 'Kola',
    date: new Date(),
    lastToUpdate: 'Fatima',
    updated: new Date(),
    status: true,
    action: true,
  },
  {
    check: true,
    category: 'Casual Shoes',
    createdBy: 'Faruq',
    date: new Date(),
    lastToUpdate: 'Fatima',
    updated: new Date(),
    status: false,
    action: false,
  },
  {
    check: false,
    category: 'Casual Shoes',
    createdBy: 'Fatimah',
    date: new Date(),
    lastToUpdate: 'Fatima',
    updated: new Date(),
    status: true,
    action: false,
  },
  {
    check: true,
    category: 'Casual Shoes',
    createdBy: 'Naveedah',
    date: new Date(),
    lastToUpdate: 'Fatima',
    updated: new Date(),
    status: true,
    action: false,
  },
  {
    check: true,
    category: 'Casual Shoes',
    createdBy: 'Mareh',
    date: new Date(),
    lastToUpdate: 'Fatima',
    updated: new Date(),
    status: true,
    action: true,
  },
  {
    check: false,
    category: 'Casual Shoes',
    createdBy: 'Abuchi',
    date: new Date(),
    lastToUpdate: 'Fatima',
    updated: new Date(),
    status: false,
    action: true,
  },
];

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss'],
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  constructor(public dialog: MatDialog) {}

  // Table data
  displayedColumns: string[] = [
    'check',
    'category',
    'createdBy',
    'date',
    'lastToUpdate',
    'updated',
    'status',
    'action',
  ];
  datasource: Category[] = [];

  ngOnInit(): void {
    this.datasource = dummyData;
  }

  openForm() {
    const popUp = this.dialog.open(AddNewCategoryComponent, {
      backdropClass: 'zns-dialog-backdrop',
      autoFocus: true,
      panelClass: 'zns-dialog',
      disableClose: true,

      data: {
        name: 'Omotosho Kolawole',
        type: 'Angular',
      },
    });

    this.subscription.add(
      popUp.afterClosed().subscribe((data) => {
        if (data) {
          console.log(data.categoryName);
        } else {
          console.log('No data passed');
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
