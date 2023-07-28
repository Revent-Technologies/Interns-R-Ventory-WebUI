import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription, filter } from 'rxjs';
import { WarehouseService } from 'src/app/@core/services/warehouse.service';
import * as fromApp from '../../../../../@core/stores/app/app.reducer';
import * as WarehouseActions from 'src/app/@core/stores/warehouse/warehouse.actions';
import { NewWarehouse } from 'src/app/@core/interfaces';
import * as warehouseSelectors from 'src/app/@core/stores/warehouse/warehouse.selector';
import { getNewWarehouse } from 'src/app/@core/stores/warehouse/warehouse.selector';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NotificationComponent } from 'src/app/@core/shared/notification/notification.component';
import { Notification } from 'src/app/@core/interfaces';
import { NotificationService } from 'src/app/@core/services/notification.service';

@Component({
  selector: 'app-new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.scss'],
})
export class NewWarehouseComponent implements OnInit {
  warehouseForm!: FormGroup;
  subcription = new Subscription();
  showNotification = false;
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private formBuilder: FormBuilder,
    private warehouseService: WarehouseService,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    public dialogRef: MatDialogRef<NewWarehouseComponent>,
    private store: Store<fromApp.AppState>,
    private snackBar: MatSnackBar // private notification: NotificationService
  ) {}

  ngOnInit() {
    this.warehouseForm = this.formBuilder.group({
      warehouseName: ['', Validators.required],
      warehouseCode: ['', Validators.required],
    });
    console.log(this.editdata);

    // if (this.editdata) {
    //   this.warehouseForm.controls['warehouseName'].setValue(
    //     this.editdata.warehouseName
    //   );
    //   this.warehouseForm.controls['warehouseCode'].setValue(
    //     this.editdata.warehouseCode
    //   );
    // }

    if (this.editdata) {
      this.warehouseForm.patchValue({
        warehouseName: this.editdata.warehouseName,
        warehouseCode: this.editdata.warehouseCode,
      });
    }
  }

  addWarehouse() {
    if (this.warehouseForm.valid) {
      const warehouseName = this.warehouseForm.value.warehouseName;
      const warehouseCode = this.warehouseForm.value.warehouseCode;

      const newWarehouse: NewWarehouse = {
        id: '',
        check: false,
        categoriesName: `${warehouseName}(${warehouseCode})`,
        createdBy: '',
        date: new Date(),
        updatedBy: '',
        updateDate: new Date(),
        status: '',
        ...this.warehouseForm.value,
      };

      this.store.dispatch(WarehouseActions.AddWarehouse({ newWarehouse }));

      this.dialogRef.close();

      const notificationData: Notification = {
        state: 'success',
        message: 'Successfully Added',
      };
      this.openNotification(notificationData);
      // const notificationData: Notification = {
      //   state: 'success',
      //   message: 'Warehouse added successfully!',
      // };
      // this.notificationService.openSnackBar(
      //   notificationData,
      //   'zns-notification-success'
      // );
    }
  }

  openNotification(data: Notification) {
    this.snackBar.openFromComponent(NotificationComponent, {
      data,
      duration: 3000,
      verticalPosition: this.verticalPosition,
      panelClass: ['zns-notification-success'],
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  // submitForm() {
  //   if (this.warehouseForm.valid) {
  //     const warehouseName = this.warehouseForm.value;
  //     const warehouseCode = this.warehouseForm.value;

  //     console.log(warehouseName, warehouseCode);
  //     this.addWarehouse();
  //   }
  // }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
