import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-diretivas-atributos>
    <h1>Aula de diretivas de atributo</h1>
    <hr>
    </app-diretivas-atributos>-->

    <app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()">Add</button>
    <button (click)="subtrair()">Subtrair</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

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


}
