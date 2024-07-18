import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUsComponent } from './choose-us.component';

describe('ChooseUsComponent', () => {
  let component: ChooseUsComponent;
  let fixture: ComponentFixture<ChooseUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseUsComponent]
    });
    fixture = TestBed.createComponent(ChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
