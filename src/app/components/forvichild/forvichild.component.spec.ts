import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForvichildComponent } from './forvichild.component';

describe('ForvichildComponent', () => {
  let component: ForvichildComponent;
  let fixture: ComponentFixture<ForvichildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForvichildComponent]
    });
    fixture = TestBed.createComponent(ForvichildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
