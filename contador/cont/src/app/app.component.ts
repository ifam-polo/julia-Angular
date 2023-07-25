import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contagem : number = 0;

  ngOnInit(): void{
    this.resetCont();
  }
  
  adicionaMaisUm(){
    this.contagem = this.contagem + 1;
    console.log(this.contagem);
  }
  AdicionaMaisDez(){
    this.contagem = this.contagem + 10;
    console.log(this.contagem);
  }

  resetCont(){
    this.contagem = 0;
    console.log(this.contagem);
  }
}
