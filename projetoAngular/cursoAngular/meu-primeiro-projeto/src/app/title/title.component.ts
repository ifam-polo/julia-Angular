import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
     
@Component({
 selector: 'app-title',
 templateUrl: './title.component.html',
 styleUrls: ['./title.component.css'],
})
 
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title:string = "Bem-vindo!"
  constructor() {}
  ngOnInit() { }

  ngOnChanges(): void {
  }
  ngOnDestroy(): void {
    console.log("O componente foi destruido")
  }
}
