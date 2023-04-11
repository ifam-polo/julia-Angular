import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent {
  
  public valor: boolean = true;
  public heightPx: string = "200px";
  public backgroundColor: string = "yellow"

  public nome: string = "";
  public list: Array<{nome: string}> = [{nome: "Julia"}]

  public date: Date = new Date();

  constructor(){}
  
  ngOnInit():void{

    setInterval(() => {
      if (this.heightPx == "200px"){
      this.heightPx = "50px"
      this.backgroundColor = "blue"
      } else {
        this.heightPx = "200px"
        this.backgroundColor = "yellow"
      }
    }, 2000)
    
  }

  public onclickEvent(){

    if(this.valor){
      this.valor = false;
    } else {
      this.valor = !false;
    }

    console.log('funcionou')
  }

  public salvar(){
    this.list.push({nome: this.nome});
    this.nome = "";
  }
}
