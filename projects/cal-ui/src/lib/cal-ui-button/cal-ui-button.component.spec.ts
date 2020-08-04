import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUiButtonComponent } from './cal-ui-button.component';

describe('CalUiButtonComponent', () => {
  let component: CalUiButtonComponent;
  let fixture: ComponentFixture<CalUiButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUiButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
