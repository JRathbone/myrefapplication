import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingcomponentComponent } from './headingcomponent.component';

describe('HeadingcomponentComponent', () => {
  let component: HeadingcomponentComponent;
  let fixture: ComponentFixture<HeadingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
