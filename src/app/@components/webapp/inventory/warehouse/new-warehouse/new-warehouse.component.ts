import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.scss']
})
export class NewWarehouseComponent implements OnInit{
   myForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      warehouseName: ['', Validators.required],
      warehouseCode: ['',Validators.required]
    });
  }


  onSubmitForm(){
    if (this.myForm.valid){
      console.log(this.myForm.value);
    }
  }
}
