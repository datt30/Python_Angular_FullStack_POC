import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu'},
  { path: 'menu', component: MenuComponent,
    children: []  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
