import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WarehouseService } from 'src/app/@core/services/warehouse.service';

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
    public dialogRef: MatDialogRef<NewWarehouseComponent>
  ) {}

  ngOnInit() {
    this.warehouseForm = this.formBuilder.group({
      warehouseName: ['', Validators.required],
      warehouseCode: ['', Validators.required],
    });

    if(this.editdata){
      this.warehouseForm.controls['wareHouseName'].setValue(this.editdata.wareHouseName); 
      this.warehouseForm.controls['wareHouseCode'].setValue(
        this.editdata.wareHouseCode
      ); 
    }
  }


  addWarehouse(){
    console.log(this.warehouseForm.value);
    
  }
  closeDialog() {
    this.dialogRef.close();
  }

  submitForm(){
    if (this.warehouseForm.valid) {
      const warehouseName = this.warehouseForm.value;
      const warehouseCode = this.warehouseForm.value;
 
      console.log(warehouseName,warehouseCode);
      this.dialogRef.close();
    }
  }
}
