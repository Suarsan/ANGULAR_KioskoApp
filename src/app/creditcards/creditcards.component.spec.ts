import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardsComponent } from './creditcards.component';

describe('CreditcardsComponent', () => {
  let component: CreditcardsComponent;
  let fixture: ComponentFixture<CreditcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
