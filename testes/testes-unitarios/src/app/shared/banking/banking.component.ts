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
  public setDepositar(value: string): number{
    const depositar = Number(value)
    console.log(depositar)

    return depositar;
  }
}
