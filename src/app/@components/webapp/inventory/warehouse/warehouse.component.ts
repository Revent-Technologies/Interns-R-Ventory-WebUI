import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent {


  
  constructor(private dialog: MatDialog) {}

  openDialogNew() {
    this.dialog.open(NewWarehouseComponent);
  }
}
