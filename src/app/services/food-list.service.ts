 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "X bacon",
    "feijao",
    "Ovo"
  ];

  constructor() { }

  public foodList(){
    return this.list;
  }


}
