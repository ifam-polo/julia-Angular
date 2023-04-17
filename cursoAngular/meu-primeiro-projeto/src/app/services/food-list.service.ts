import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'

//Interface module
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
  
  constructor(private http: HttpClient) { }

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    );
  }


// adiciona itens ao vetor
  public foodListAdd(value: string){
    this.foodListAlert(value);
    return this.list.push(value)
  }

  /*public foodListAdd(value: string):  Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, { nome: value}).pipe(
      res => res,
      error => error
      )
  }*/

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }
}
