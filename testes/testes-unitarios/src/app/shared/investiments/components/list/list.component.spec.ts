import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' (u) shoul list investiments', () => {
    //let investiments = component.investiments;
    expect(component.investiments.length).toBe(4)
    expect(component.investiments[0].name).toContain('itau')
    expect(component.investiments[1].name).toContain('c6')
  });
  it('(I) should list investiments', () => {
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
    expect(investiments.length).toBe(4);
    expect(investiments[0].textContent.trim()).toEqual('itau | 100')
    expect(investiments[3].textContent.trim()).toEqual('nubank | 2000')
  });
});
