import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParcelsComponent } from './my-parcels.component';

describe('MyParcelsComponent', () => {
  let component: MyParcelsComponent;
  let fixture: ComponentFixture<MyParcelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyParcelsComponent]
    });
    fixture = TestBed.createComponent(MyParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
