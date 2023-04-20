import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamestoryComponent } from './gamestory.component';

describe('GamestoryComponent', () => {
  let component: GamestoryComponent;
  let fixture: ComponentFixture<GamestoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamestoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
