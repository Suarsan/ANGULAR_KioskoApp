import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreditCardComponent } from './listcreditcard.component';

describe('ListcreditcardComponent', () => {
  let component: ListCreditCardComponent;
  let fixture: ComponentFixture<ListCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCreditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
