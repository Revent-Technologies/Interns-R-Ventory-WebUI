import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { countryCodes, countries, states } from 'src/app/@core/constants';

@Component({
  selector: 'app-create-vendors',
  templateUrl: './create-vendors.component.html',
  styleUrls: ['./create-vendors.component.scss'],
})
export class CreateVendorsComponent implements OnInit {
  VendorName = '';
  VendorEmail = '';
  vendorPhone = '';
  countryCode = countryCodes;
  countries = countries;
  states = states;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ref: MatDialogRef<CreateVendorsComponent>,
    private fb: FormBuilder
  ) {}

  vendorForm = this.fb.group({
    vendorName: this.VendorName,
    vendorEmail: this.VendorEmail,
    vendorPhone: this.vendorPhone,
    city: '',
    street: '',
    countryName: '',
    state: ''
  });

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.vendorForm.value);
    this.ref.close(this.vendorForm.value);
  }

  closeDialog() {
    this.ref.close();
  }
}
