import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddressesComponent } from './my-addresses.component';

describe('MyAddressesComponent', () => {
  let component: MyAddressesComponent;
  let fixture: ComponentFixture<MyAddressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAddressesComponent]
    });
    fixture = TestBed.createComponent(MyAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
