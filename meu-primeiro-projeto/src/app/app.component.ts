import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  /* ngIf: serve para remover o componente da tela. Seu valor é setado como true e para desaparecer deve ser setado como false*/
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  
  public destruir: boolean = true
  
  constructor() {}

  ngOnInit(): void {}

  public destruirComponent(){
    this.destruir = false;
    console.log("botão de destruir clicado")
  }

}
