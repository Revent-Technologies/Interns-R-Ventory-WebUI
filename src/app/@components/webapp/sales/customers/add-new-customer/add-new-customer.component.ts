import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.scss']
})
export class AddNewCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  isExpanded = false;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    public dialogRef: MatDialogRef<AddNewCustomerComponent>
  ) {}

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
     customerName: ['', Validators.required],
      customerEmail: ['', Validators.required],
      customerAddress: ['', Validators.required],
      customerCity: ['', Validators.required],
    });

    if(this.editdata){
      this.customerForm.controls['customerName'].setValue(this.editdata.customerName); 
      this.customerForm.controls['customerEmail'].setValue(this.editdata.customerEmail); 
      this.customerForm.controls['customerAddress'].setValue(this.editdata.customerAddress);
      this.customerForm.controls['customerCity'].setValue(this.editdata.customerCity);
    }
  }


  addcustomer(){
    console.log(this.customerForm.value);
  }
  closeDialog() {
    this.dialogRef.close();
  }

  submitForm(){
    if (this.customerForm.valid) {
      const customerName = this.customerForm.value;
      const customerEmail = this.customerForm.value;
 
      console.log(customerName,customerEmail);
      this.dialogRef.close();
    }
  }
}