import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  constructor(private http: HttpClient) {}

  url = 'http://127.0.0.1:5000/poc/v1';
  
  public getAllProducts() {
    return this.http.get(`${this.url}/products/`);
  }

  public createProduct(product: Product) {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let options = {
      headers: httpHeaders
    }; 
    this.http.post(`${this.url}/product/`,{
      "productName":product.productName,
      "price": product.price,
      "detail": product.detail
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

  public deleteProduct(id){
    this.http.delete(`${this.url}/product/${id}`)
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

  public updateProduct(product: Product) {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let options = {
      headers: httpHeaders
    }; 
    this.http.put(`${this.url}/product/${product.productName}`,{
      "productName":product.productName,
      "price": product.price,
      "detail": product.detail
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