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

  public investiments !: Array<Investiments>;
  constructor(
    private listInvestimentsService: ListInvestimentsService
  ) { }

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe({
      next: (res) =>(this.investiments = res)
    })
  }

}
