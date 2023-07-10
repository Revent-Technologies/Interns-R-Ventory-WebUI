import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-vendors',
  templateUrl: './create-vendors.component.html',
  styleUrls: ['./create-vendors.component.scss'],
})
export class CreateVendorsComponent implements OnInit {
  VendorName = '';
  VendorEmail = '';
  vendorPhone = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ref: MatDialogRef<CreateVendorsComponent>,
    private fb: FormBuilder
  ) {}

  vendorForm = this.fb.group({
    vendorName: this.VendorName,
    vendorEmail: this.VendorEmail,
    vendorPhone: this.vendorPhone,
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.vendorForm.value);
    this.ref.close(this.vendorForm.value);
  }

  closeDialog() {
    this.ref.close();
  }
}
