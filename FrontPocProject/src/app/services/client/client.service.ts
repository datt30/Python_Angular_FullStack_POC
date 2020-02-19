import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from "src/app/models/client";

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  
  constructor(private http: HttpClient) {}

  url = 'http://127.0.0.1:5000/poc/v1';
  
  public getAllClients() {
    return this.http.get(`${this.url}/clients/`);
  }

  public createClient(client: Client) {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let options = {
      headers: httpHeaders
    }; 
    this.http.post(`${this.url}/client/`,{
      "identityNumber":client.identityNumber,
      "age": client.age,
      "clientName": client.clientName,
      "clientSurname": client.clientSurname
    },options).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

  public deleteClient(id){
    this.http.delete(`${this.url}/client/${id}`)
    .subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
  }

  public updateClient(client: Client) {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let options = {
      headers: httpHeaders
    }; 
    this.http.put(`${this.url}/client/${client.identityNumber}`,{
      "identityNumber":client.identityNumber,
      "age": client.age,
      "clientName": client.clientName,
      "clientSurname": client.clientSurname
    },options).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }








}