import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineRatingComponent } from './magazine-rating.component';

describe('MagazineRatingComponent', () => {
  let component: MagazineRatingComponent;
  let fixture: ComponentFixture<MagazineRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
