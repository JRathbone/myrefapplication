import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcominggamesComponent } from './upcominggames.component';

describe('UpcominggamesComponent', () => {
  let component: UpcominggamesComponent;
  let fixture: ComponentFixture<UpcominggamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcominggamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcominggamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
