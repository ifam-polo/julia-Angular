import { Component } from '@angular/core';
import { AdviceService } from './services/advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advice';

  advice: any = '';

  constructor(private adviceApi: AdviceService){}

  randomAdvice(){
    this.adviceApi.getAdvice().subscribe((res) => {
      console.log(res, 'randomAdvice')
      this.advice = res;
    })
  }
}
