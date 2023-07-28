import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { countryCodes } from 'src/app/@core/constants';
import { countries, states } from 'src/app/@core/constants/locations.constants';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.scss']
})
export class AddNewCustomerComponent implements OnInit {
  customerName = '';
  customerEmail = '';
  customerAddress = '';
  customerCity = '';
  customerPhone = '';
  countryCode = countryCodes;
  isExpanded = false;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  countryControl = new FormControl('');
  stateControl = new FormControl('');
  selectedCountry: string = '';
  selectedState: string = '';


  countries = countries;
  states = states;

  selectedStates = this.states[this.countries[0]]; // default to the first country

  onCountryChange() {
    this.selectedCountry = this.countryControl.value;
    this.selectedStates = this.states[this.countryControl.value];
    this.stateControl.reset(); // clear previously selected state
    
  }

  onStateChange() {
    this.selectedState = this.stateControl.value;
  }

  constructor(
    private fB: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    public Ref: MatDialogRef<AddNewCustomerComponent>
  ) { }

  customerForm: FormGroup = this.fB.group({
    customerName: this.customerName,
    customerEmail: this.customerEmail,
    customerAddress: this.customerAddress,
    customerCity: this.customerCity,
    customerPhone: this.customerPhone,
  });


  ngOnInit(): void { }


  onSubmit() {
    // console.log(this.customerForm.value);
    this.Ref.close(this.customerForm.value);
  }

  closeDialog() {
    this.Ref.close();
  }
}