import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreditCardComponent } from './newcreditcard.component';

describe('NewcreditcardComponent', () => {
  let component: NewCreditCardComponent;
  let fixture: ComponentFixture<NewCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCreditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
