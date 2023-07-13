import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContainer,
  MatDialogRef,
} from '@angular/material/dialog';
import { countryCodes } from 'src/app/@core/constants';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.scss'],
})
export class AddNewCategoryComponent {
  catergoryName = '';
  c = countryCodes

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ref: MatDialogRef<AddNewCategoryComponent>,
    private fb: FormBuilder
  ) {}

  categoryForm = this.fb.group({
    categoryName: this.catergoryName,
  });

  onSubmit() {
    console.log(this.categoryForm);
    this.ref.close(this.categoryForm.value);
  }

  closeDialog() {
    this.ref.close();
  }
}
