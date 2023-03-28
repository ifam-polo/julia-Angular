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
    <app-new-component></app-new-component>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}


}
