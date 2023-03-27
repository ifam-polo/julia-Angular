import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit{

  public condition: boolean = true
  public conditionClick: boolean = true
  
  public list: Array<{nome: string, idade: number }> = [
    {nome: "Julia Donadelli Giroldo", idade: 20},
    {nome: "Julio", idade: 21}];

  public nome: string = 'dener';

  constructor() {}

  ngOnInit(): void {
 
    setInterval( ()=>{
      if(this.condition){
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick(){
   
    if(this.conditionClick){
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
    
  } 

  public onClickAddList() {
    this.list.push({nome: "Nay", idade: 47})
  }

  public onClickEventList(event: number){
   // apaga o campo que foi clicado.
    this.list.splice(event, 1);

  }
}
