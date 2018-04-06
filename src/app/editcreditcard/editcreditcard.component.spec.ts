import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcreditcardComponent } from './editcreditcard.component';

describe('EditcreditcardComponent', () => {
  let component: EditcreditcardComponent;
  let fixture: ComponentFixture<EditcreditcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcreditcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
