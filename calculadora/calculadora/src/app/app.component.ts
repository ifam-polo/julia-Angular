import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  
  calValue: number = 0;
  calNumber: string = 'noValue';
  funcT: any = 'NoFunction';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any){
    if(type == 'number'){
      this.onNumberClick(val);
    }
    else if (type == 'function'){
      this.onFunctionClick(val)
    }
  }

  onNumberClick(val: string){
    if(this.calNumber != 'noValue'){
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if(this.funcT == 'c'){
      this.clearAll()
    }
    if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT != 'NoFunction') {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const Res = this.firstNumber + this.secondNumber;
      this.totalAssValue(Res, val);
      if(val == '='){
        this.onEqualPress()
      }
    }
    if (this.funcT == '-') {
      const Res = this.firstNumber - this.secondNumber;
      this.totalAssValue(Res, val);
      if(val == '='){
        this.onEqualPress()
      }
    }
    if (this.funcT == '*') {
      const Res = this.firstNumber * this.secondNumber;
      this.totalAssValue(Res, val);
      if(val == '='){
        this.onEqualPress()
      }
    }
    if (this.funcT == '/') {
      const Res = this.firstNumber / this.secondNumber;
      this.totalAssValue(Res, val);
      if(val == '='){
        this.onEqualPress()
      }
    }
    if (this.funcT == '%') {
      const Res = this.firstNumber % this.secondNumber;
      this.totalAssValue(Res, val);
      if(val == '='){
        this.onEqualPress()
      }
    }
  }

  totalAssValue(Res: number, val: string) {
    this.calValue = Res;
    this.firstNumber = Res;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
  }

  onEqualPress(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }
  clearAll(){
    this.firstNumber = 0
    this.secondNumber = 0
    this.calValue = 0
    this.funcT = 'NoFunction'
    this.calNumber = 'noValue'
  }
}
