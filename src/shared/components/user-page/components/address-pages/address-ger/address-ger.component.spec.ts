import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressGerComponent } from './address-ger.component';

describe('AddressGerComponent', () => {
  let component: AddressGerComponent;
  let fixture: ComponentFixture<AddressGerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressGerComponent]
    });
    fixture = TestBed.createComponent(AddressGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
