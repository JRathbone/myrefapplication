import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentgamesComponent } from './recentgames.component';

describe('RecentgamesComponent', () => {
  let component: RecentgamesComponent;
  let fixture: ComponentFixture<RecentgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
