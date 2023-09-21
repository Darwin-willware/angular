import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conchild1Component } from './conchild1.component';

describe('Conchild1Component', () => {
  let component: Conchild1Component;
  let fixture: ComponentFixture<Conchild1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Conchild1Component]
    });
    fixture = TestBed.createComponent(Conchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
