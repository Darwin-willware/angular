import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgifComponent } from './mgif.component';

describe('MgifComponent', () => {
  let component: MgifComponent;
  let fixture: ComponentFixture<MgifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MgifComponent]
    });
    fixture = TestBed.createComponent(MgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
