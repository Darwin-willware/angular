import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtabindComponent } from './dtabind.component';

describe('DtabindComponent', () => {
  let component: DtabindComponent;
  let fixture: ComponentFixture<DtabindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DtabindComponent]
    });
    fixture = TestBed.createComponent(DtabindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
