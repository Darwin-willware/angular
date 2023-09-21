import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalcompComponent } from './conditionalcomp.component';

describe('ConditionalcompComponent', () => {
  let component: ConditionalcompComponent;
  let fixture: ComponentFixture<ConditionalcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionalcompComponent]
    });
    fixture = TestBed.createComponent(ConditionalcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
