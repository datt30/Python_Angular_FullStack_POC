import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu'},
  { path: 'menu', component: MenuComponent,
    children: [
      {
        path: 'clients',
        loadChildren: () =>
          import('./components/client/client.module').then(m=>m.ClientModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./components/product/product.module').then(m=>m.ProductModule)
      }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
