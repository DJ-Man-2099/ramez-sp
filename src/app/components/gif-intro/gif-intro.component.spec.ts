import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GIFIntroComponent } from './gif-intro.component';

describe('GIFIntroComponent', () => {
  let component: GIFIntroComponent;
  let fixture: ComponentFixture<GIFIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GIFIntroComponent]
    });
    fixture = TestBed.createComponent(GIFIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
