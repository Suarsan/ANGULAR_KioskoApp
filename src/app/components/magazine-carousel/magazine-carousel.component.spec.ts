import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineCarouselComponent } from './magazine-carousel.component';

describe('MagazineCarouselComponent', () => {
  let component: MagazineCarouselComponent;
  let fixture: ComponentFixture<MagazineCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
