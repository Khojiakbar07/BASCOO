import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsProductsComponent } from './sports-products.component';

describe('SportsProductsComponent', () => {
  let component: SportsProductsComponent;
  let fixture: ComponentFixture<SportsProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsProductsComponent]
    });
    fixture = TestBed.createComponent(SportsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
