import { Component } from '@angular/core';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent {
  constructor(){
  }

  public listAddItem(value: string){
    console.log(value)
  }
}

