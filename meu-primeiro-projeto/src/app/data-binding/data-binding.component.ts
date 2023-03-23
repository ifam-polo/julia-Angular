import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public nome: string = "Júlia";
  public idade: number = 20;
  public maisDois: number = 2;

  constructor() {}

  ngOnInit(): void {}

}
