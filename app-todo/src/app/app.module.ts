import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ComponentsComponent } from './modules/components/components.component';
import { HeaderComponent } from './modules/home/components/header/header.component';
import { TodoButtonDeleteAllComponent } from './modules/home/components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './modules/home/components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './modules/home/components/todo-list/todo-list.component';

//Modules
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    //ComponentsComponent,
    HomeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    //HeaderComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
