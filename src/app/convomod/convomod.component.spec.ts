import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvomodComponent } from './convomod.component';

describe('ConvomodComponent', () => {
  let component: ConvomodComponent;
  let fixture: ComponentFixture<ConvomodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvomodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvomodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
