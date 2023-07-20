import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { GatosComponent } from './pages/gatos/gatos.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path:'gatos/:id',
    component: GatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
