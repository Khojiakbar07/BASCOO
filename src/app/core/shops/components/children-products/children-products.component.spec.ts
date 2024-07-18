import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenProductsComponent } from './children-products.component';

describe('ChildrenProductsComponent', () => {
  let component: ChildrenProductsComponent;
  let fixture: ComponentFixture<ChildrenProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenProductsComponent]
    });
    fixture = TestBed.createComponent(ChildrenProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
