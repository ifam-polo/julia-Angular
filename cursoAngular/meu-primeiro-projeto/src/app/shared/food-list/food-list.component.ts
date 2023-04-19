import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

//services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService)  {}

  ngOnInit():void {
    this.foodListService.foodList().subscribe({
      next: (res) => this.foodList = res,
      error: (err) => console.log(err)
    })

    this.foodListService.emitEvent.subscribe({
      next: (res: FoodList) => {
        alert(`Voce adcionou um item a lista: ${res.nome}`);
        return this.foodList.push(res)
      }
      });
  }

  public foodListEdit(value: string, id: number) {
    this.foodListService.foodListEdit(value, id).subscribe({
      next: (res) => {
        return console.log(res)
      },
      error: (err) => console.log(err)

    })
  }

  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe({
      next: (res) => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error: (err) => console.log(err)
    })
  }

  
}
