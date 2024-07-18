import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientComponent } from './recipient.component';

describe('RecipientComponent', () => {
  let component: RecipientComponent;
  let fixture: ComponentFixture<RecipientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipientComponent]
    });
    fixture = TestBed.createComponent(RecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
