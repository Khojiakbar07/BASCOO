import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyProductsComponent } from './beauty-products.component';

describe('BeautyProductsComponent', () => {
  let component: BeautyProductsComponent;
  let fixture: ComponentFixture<BeautyProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyProductsComponent]
    });
    fixture = TestBed.createComponent(BeautyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
