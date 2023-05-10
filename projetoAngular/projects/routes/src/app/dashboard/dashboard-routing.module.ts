import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

//PAGES


const routes: Routes = [
    {
        path: '', component: HomeComponent
    }
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)], //forChild pq é uma rota filha
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
