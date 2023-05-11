import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
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

  it(`(U) setSacar(): shoud transfer poupaca dont have string (isNaN)
  or poupaca < value
`, () => {
  expect(component.setSacar('string')).not.toBeTruthy();
  expect(component.setSacar('10')).not.toBeTruthy();

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

});
