import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Investiments } from '../../model/investiments';
import { MOCK_LIST } from '../../services/list-investiments.mock';
import { ListInvestimentsService } from '../../services/list-investiments.service';

describe('ListComponent', () => {
  let service: ListInvestimentsService;
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  const mockList : Array<Investiments> = MOCK_LIST

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
    service = TestBed.inject(ListInvestimentsService);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' (u) shoul list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investiments.length).toBe(5);
    expect(component.investiments[0].name).toContain('Banco 1');
    expect(component.investiments[0].value).toBe(100);
    expect(component.investiments[4].name).toContain('Banco 5');
    expect(component.investiments[4].value).toBe(100);
  });
  it('(I) should list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));
    
    component.ngOnInit();
    fixture.detectChanges();

    let investiments =
      fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

    expect(investiments.length).toEqual(5);
    expect(investiments[0].textContent.trim()).toEqual('Banco 1 | 100');
    expect(investiments[4].textContent.trim()).toEqual('Banco 5 | 100');
    });
  });
