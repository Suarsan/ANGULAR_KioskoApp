import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcreditcardComponent } from './newcreditcard.component';

describe('NewcreditcardComponent', () => {
  let component: NewcreditcardComponent;
  let fixture: ComponentFixture<NewcreditcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcreditcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
