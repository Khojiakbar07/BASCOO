import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySendersComponent } from './my-senders.component';

describe('MySendersComponent', () => {
  let component: MySendersComponent;
  let fixture: ComponentFixture<MySendersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySendersComponent]
    });
    fixture = TestBed.createComponent(MySendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
