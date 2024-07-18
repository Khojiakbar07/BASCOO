import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivedComponent } from './recived.component';

describe('RecivedComponent', () => {
  let component: RecivedComponent;
  let fixture: ComponentFixture<RecivedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecivedComponent]
    });
    fixture = TestBed.createComponent(RecivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
