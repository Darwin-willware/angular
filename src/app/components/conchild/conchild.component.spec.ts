import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConchildComponent } from './conchild.component';

describe('ConchildComponent', () => {
  let component: ConchildComponent;
  let fixture: ComponentFixture<ConchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConchildComponent]
    });
    fixture = TestBed.createComponent(ConchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
