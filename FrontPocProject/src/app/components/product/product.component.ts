import { Component, OnInit } from '@angular/core';
import { productColumns, Product } from "src/app/models/product";
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent implements OnInit{
  header_title = "Products Storage";
  
  dataSource = [];
  displayedColumns = productColumns;


  constructor(public dialog: MatDialog, private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.dataSource = data['products'];
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
    var product = {
      productName: row_obj.productName,
      price: row_obj.price,
      detail: row_obj.detail,
    } as Product
    this.productService.createProduct(product);
    this.dataSource.push(product);
  }

  updateRowData(row_obj){
    var product = {
      productName: row_obj.productName,
      price: row_obj.price,
      detail: row_obj.detail,
    } as Product
    this.dataSource = this.dataSource.filter(value =>{
      if(value.productName == row_obj.productName){
        value = product;
      }
      return true;
    });
    this.productService.updateProduct(product);
  }

  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter(value =>{
      return value.productName != row_obj.productName;
    });
    this.productService.deleteProduct(row_obj.productName);
  }


}
