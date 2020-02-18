import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';


@NgModule({
  declarations: [
    ClientComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  entryComponents: [
    DialogBoxComponent
  ]
})
export class ClientModule { }
