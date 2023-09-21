import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthresolveComponent } from './authresolve.component';

describe('AuthresolveComponent', () => {
  let component: AuthresolveComponent;
  let fixture: ComponentFixture<AuthresolveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthresolveComponent]
    });
    fixture = TestBed.createComponent(AuthresolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
