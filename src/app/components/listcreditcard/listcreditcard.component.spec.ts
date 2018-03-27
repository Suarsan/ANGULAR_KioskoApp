import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcreditcardComponent } from './listcreditcard.component';

describe('ListcreditcardComponent', () => {
  let component: ListcreditcardComponent;
  let fixture: ComponentFixture<ListcreditcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcreditcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
