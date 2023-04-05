 import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "X bacon",
    "feijao",
    "Ovo"
  ];

  constructor() { }

//retorna o vetor list
  public foodList(){
    return this.list;
  }

// adiciona itens ao vetor
  public foodListAdd(value: string){
    this.foodListAlert(value);
    return this.list.push(value)
  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }

}
