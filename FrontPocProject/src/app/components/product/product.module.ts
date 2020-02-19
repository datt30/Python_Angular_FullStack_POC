import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';


@NgModule({
  declarations: [
    ProductComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  entryComponents: [
    DialogBoxComponent
  ]
})
export class ProductModule { }
