import { Component } from '@angular/core';

//model
import { Investiments } from '../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public investiments: Array<Investiments> = [
    {
      name: "itau",
      value: 100
    },
    {
      name: "c6",
      value: 1000
    },
    {
      name: "banco do brasil",
      value: 200
    },
    {
      name: "itau",
      value: 2000
    },
  ]
  constructor() { }

}
