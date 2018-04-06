import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermsComponent } from './therms.component';

describe('ThermsComponent', () => {
  let component: ThermsComponent;
  let fixture: ComponentFixture<ThermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
