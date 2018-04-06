import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineSliderComponent } from './magazine-slider.component';

describe('MagazineSliderComponent', () => {
  let component: MagazineSliderComponent;
  let fixture: ComponentFixture<MagazineSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
