import { Component } from '@angular/core';
//services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent {
  constructor(private foodListService: FoodListService){
  }

  public listAddItem(value: string){
    return this.foodListService.foodListAdd(value);
  }
}

