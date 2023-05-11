import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent {
  private poupanca: number = 100;
  private carteira: number = 50;
  constructor(){}

  get getSacar(): number{
    return this.poupanca;
  }

  get getCarteira(): number{
    return this.carteira;
  }

  public setSacar(value: string): number | undefined{
    const sacar = Number(value);

    if (isNaN(sacar) || this.poupanca < sacar){
      return;

    }

    this.poupanca -= sacar;

    console.log(this.carteira += sacar);

    return sacar;
  }

  public setDepositar(value: string): number | undefined{
    const depositar = Number(value);

    if (isNaN(depositar) || this.carteira < depositar){
      return;

    }

    this.carteira -= depositar;

    console.log(this.poupanca += depositar);
  
    return depositar;
  }
}
