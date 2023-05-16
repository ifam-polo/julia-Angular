import { Component, OnInit } from '@angular/core';

//model
import { Investiments } from '../../model/investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';

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
      name: "nubank",
      value: 2000
    },
  ]
  constructor(
    private listInvestimentsService:ListInvestimentsService
  ) { }

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
  }

}
