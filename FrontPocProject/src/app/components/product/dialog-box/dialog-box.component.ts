import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})

export class DialogBoxComponent {
  action:string;
  local_data:any;
  form;
  
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Product) {
    this.local_data = {...data};
    this.action = this.local_data.action;

    this.form = formBuilder.group({
      productName: [this.local_data.productName, Validators.required],
      price:       [this.local_data.price],
      detail:      [this.local_data.detail]
    });
  }

  doAction(){
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.dialogRef.close({event:this.action,data:this.form.value});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}