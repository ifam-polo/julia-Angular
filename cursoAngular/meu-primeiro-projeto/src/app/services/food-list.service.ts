 import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

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

  private url: string = "http://localhost:3000/"; // list-food
  
  constructor(private http: HttpClient ) { }

/*retorna o vetor list
  public foodList(){
    return this.list;
  }*/

  public foodList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}list-food`)
                    .pipe(
                      res => res,
                      error => error
                      
                      
                    )
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
