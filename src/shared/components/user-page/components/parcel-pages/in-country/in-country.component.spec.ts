import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCountryComponent } from './in-country.component';

describe('InCountryComponent', () => {
  let component: InCountryComponent;
  let fixture: ComponentFixture<InCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InCountryComponent]
    });
    fixture = TestBed.createComponent(InCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
