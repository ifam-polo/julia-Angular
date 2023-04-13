import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  public getDados: {nome: string, idade: number} | undefined

  constructor() {}

  ngOnInit(): void {
  }

  public add(){
    this.addValue+=1;
    console.log('somado')
  }

  public subtrair() {
    this.addValue-=1
  }
  public setDados(event: {nome: string, idade: number}){
    this.getDados = event
  }


}
