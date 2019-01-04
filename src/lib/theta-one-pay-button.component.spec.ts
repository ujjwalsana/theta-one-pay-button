import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetaOnePayButtonComponent } from './theta-one-pay-button.component';

describe('ThetaOnePayButtonComponent', () => {
  let component: ThetaOnePayButtonComponent;
  let fixture: ComponentFixture<ThetaOnePayButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThetaOnePayButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetaOnePayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
