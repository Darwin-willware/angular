import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildrenComponent } from './contentchildren.component';

describe('ContentchildrenComponent', () => {
  let component: ContentchildrenComponent;
  let fixture: ComponentFixture<ContentchildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentchildrenComponent]
    });
    fixture = TestBed.createComponent(ContentchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
