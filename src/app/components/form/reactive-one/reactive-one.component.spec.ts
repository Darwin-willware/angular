import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveOneComponent } from './reactive-one.component';

describe('ReactiveOneComponent', () => {
  let component: ReactiveOneComponent;
  let fixture: ComponentFixture<ReactiveOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveOneComponent]
    });
    fixture = TestBed.createComponent(ReactiveOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
