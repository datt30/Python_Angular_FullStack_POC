import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { environment } from '../environments/environment';
import { DemoMaterialModule } from './material-module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
