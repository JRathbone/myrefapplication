import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedGamesComponent } from './assigned-games.component';

describe('AssignedGamesComponent', () => {
  let component: AssignedGamesComponent;
  let fixture: ComponentFixture<AssignedGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
