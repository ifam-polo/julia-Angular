import { Component,OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();
  public list: Array<{nome: string, idade: number}> = [
    {nome: "julia", idade: 20},
    {nome: "Ana", idade: 24},
    {nome: "pedro", idade: 30}
  ]
    
  
  constructor() {}

  ngOnInit(): void {
  }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }
}
