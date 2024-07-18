import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIsItWorkComponent } from './how-is-it-work.component';

describe('HowIsItWorkComponent', () => {
  let component: HowIsItWorkComponent;
  let fixture: ComponentFixture<HowIsItWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowIsItWorkComponent],
    });
    fixture = TestBed.createComponent(HowIsItWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
