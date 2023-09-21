import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcontentchildrenComponent } from './testcontentchildren.component';

describe('TestcontentchildrenComponent', () => {
  let component: TestcontentchildrenComponent;
  let fixture: ComponentFixture<TestcontentchildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestcontentchildrenComponent]
    });
    fixture = TestBed.createComponent(TestcontentchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
