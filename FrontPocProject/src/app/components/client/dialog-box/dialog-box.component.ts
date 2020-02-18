import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client';


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
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Client) {
    this.local_data = {...data};
    this.action = this.local_data.action;

    this.form = formBuilder.group({
      identityNumber: [this.local_data.identityNumber, Validators.required],
      age:            [this.local_data.age],
      clientName:     [this.local_data.clientName],
      clientSurname:  [this.local_data.clientSurname]
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