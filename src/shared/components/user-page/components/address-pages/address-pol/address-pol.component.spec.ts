import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPolComponent } from './address-pol.component';

describe('AddressPolComponent', () => {
  let component: AddressPolComponent;
  let fixture: ComponentFixture<AddressPolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressPolComponent]
    });
    fixture = TestBed.createComponent(AddressPolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
