import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackHandComponent } from './blackjack-hand.component';

describe('BlackjackHandComponent', () => {
  let component: BlackjackHandComponent;
  let fixture: ComponentFixture<BlackjackHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackjackHandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackjackHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
