import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinePreviewComponent } from './magazine-preview.component';

describe('MagazinePreviewComponent', () => {
  let component: MagazinePreviewComponent;
  let fixture: ComponentFixture<MagazinePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazinePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
