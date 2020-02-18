import { Component, OnInit } from '@angular/core';
import { clientColumns, Client } from "src/app/models/client";
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ClientService } from 'src/app/services/client/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})

export class ClientComponent implements OnInit{
  header_title = "Clients in our comerce";
  
  dataSource = [];
  displayedColumns = clientColumns;


  constructor(public dialog: MatDialog, private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getAllClients().subscribe(data => {
      this.dataSource = data['clients'];
    });;
  }
 
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Edit'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
 
  addRowData(row_obj){
    var client = {
      identityNumber: row_obj.identityNumber,
      age: row_obj.age,
      clientName: row_obj.clientName,
      clientSurname: row_obj.clientSurname,
    } as Client
    this.clientService.createClient(client);
    this.dataSource.push(client);
  }

  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter(value =>{
      if(value.identityNumber == row_obj.identityNumber){
        value.identityNumber = row_obj.identityNumber,
        value.age = row_obj.age,
        value.clientName = row_obj.clientName,
        value.clientSurname = row_obj.clientSurname
      }
      return true;
    });
  }

  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter(value =>{
      return value.identityNumber != row_obj.identityNumber;
    });
    this.clientService.deleteClient(row_obj.identityNumber);
  }



}
