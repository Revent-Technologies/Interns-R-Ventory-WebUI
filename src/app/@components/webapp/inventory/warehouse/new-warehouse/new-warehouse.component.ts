import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { WarehouseService } from 'src/app/@core/services/warehouse.service';
import * as fromApp from '../../../../../@core/stores/app/app.reducer';
import * as WarehouseActions from 'src/app/@core/stores/warehouse/warehouse.actions';
import { NewWarehouse } from 'src/app/@core/interfaces';

@Component({
  selector: 'app-new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.scss'],
})
export class NewWarehouseComponent implements OnInit {
  warehouseForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private warehouseService: WarehouseService,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    public dialogRef: MatDialogRef<NewWarehouseComponent>,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.warehouseForm = this.formBuilder.group({
      warehouseName: ['', Validators.required],
      warehouseCode: ['', Validators.required],
    });
    console.log(this.editdata);

    if (this.editdata) {
      this.warehouseForm.controls['warehouseName'].setValue(
        this.editdata.warehouseName
      );
      this.warehouseForm.controls['warehouseCode'].setValue(
        this.editdata.warehouseCode
      );
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
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }

  submitForm() {
    if (this.warehouseForm.valid) {
      const warehouseName = this.warehouseForm.value;
      const warehouseCode = this.warehouseForm.value;

      console.log(warehouseName, warehouseCode);
      this.addWarehouse();
    }
  }
}
