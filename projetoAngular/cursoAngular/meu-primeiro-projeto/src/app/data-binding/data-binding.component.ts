import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public nome: string = "Júlia";
  public idade: number = 20;
  public maisDois: number = 2;

  public checkedDisabled: boolean = true;
  public imgSrc: string = "assets/sobremesa2.jpeg";
  public imgTitle: string = "Property Binding";

  public position: {x: number, y:number} = {x:0, y:0}
  constructor() {}

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
