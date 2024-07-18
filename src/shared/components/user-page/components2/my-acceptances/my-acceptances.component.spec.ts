import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAcceptancesComponent } from './my-acceptances.component';

describe('MyAcceptancesComponent', () => {
  let component: MyAcceptancesComponent;
  let fixture: ComponentFixture<MyAcceptancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAcceptancesComponent]
    });
    fixture = TestBed.createComponent(MyAcceptancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
