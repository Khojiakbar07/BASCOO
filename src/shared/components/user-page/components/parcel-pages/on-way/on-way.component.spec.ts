import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnWayComponent } from './on-way.component';

describe('OnWayComponent', () => {
  let component: OnWayComponent;
  let fixture: ComponentFixture<OnWayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnWayComponent]
    });
    fixture = TestBed.createComponent(OnWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
