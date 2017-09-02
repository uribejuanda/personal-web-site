import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFlipComponent } from './photo-flip.component';

describe('PhotoFlipComponent', () => {
  let component: PhotoFlipComponent;
  let fixture: ComponentFixture<PhotoFlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
