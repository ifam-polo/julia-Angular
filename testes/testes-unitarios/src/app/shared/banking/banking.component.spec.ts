import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListComponent } from '../investiments/components/list/list.component';
import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getSacar(): should have poupaca = 100`, () => {
    expect(component.getSacar).toEqual(100);
  });

  it(`(u) getCarteira(): should have carteira = 50`, () => {
    expect(component.getCarteira).toBe(50);
  });

  it(`(u) setSacar(): should tranfer poupanca from carteira`, ()=>{
    component.setSacar('10');
    expect(component.getSacar).toEqual(90);
    expect(component.getCarteira).toBe(60);
  });

  it(`(I) setSacar(): should transfer poupanca from carteira`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-sacar').value = "20";
    el.querySelector('#sacar').click();
    fixture.detectChanges();
    
    expect(el.querySelector('#get-carteira').textContent).toEqual('70');
    expect(component.getSacar).toEqual(80);
    expect(component.getCarteira).toEqual(70);
    
  });

  it(`(U) setSacar(): shoud transfer poupaca dont have string (isNaN)
  or poupaca < value
`, () => {
  expect(component.setSacar('string')).not.toBeTruthy();
  expect(component.setSacar('1000')).not.toBeTruthy();

  expect(component.getSacar).toEqual(100);
  expect(component.getCarteira).toEqual(50);
});
  it(`(u) setDepositar(): should transfer carteira from poupanca`, ()=>{
    component.setDepositar('10');
    expect(component.getSacar).toEqual(110);
    expect(component.getCarteira).toEqual(40);
  });

  it(`(U) setDepositar(): should transfer poupanca dont have string (isNaN) or carteira < value`, ()=>{
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();

    expect(component.getSacar).toEqual(100);
    expect(component.getCarteira).toEqual(50);
  }); 

  it(`(I) setDepositar(): should transfer carteira from poupanca`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-depositar').value = "20";
    el.querySelector('#depositar').click();
    fixture.detectChanges();
    
    expect(el.querySelector('#get-poupanca').textContent).toEqual('120');
    expect(component.getSacar).toEqual(120);
    expect(component.getCarteira).toEqual(30);
    
  });

});
