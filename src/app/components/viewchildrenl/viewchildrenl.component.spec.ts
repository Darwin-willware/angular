import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildrenlComponent } from './viewchildrenl.component';

describe('ViewchildrenlComponent', () => {
  let component: ViewchildrenlComponent;
  let fixture: ComponentFixture<ViewchildrenlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewchildrenlComponent]
    });
    fixture = TestBed.createComponent(ViewchildrenlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
