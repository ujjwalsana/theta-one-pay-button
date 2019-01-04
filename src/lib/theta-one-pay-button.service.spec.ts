import { TestBed, inject } from '@angular/core/testing';

import { ThetaOnePayButtonService } from './theta-one-pay-button.service';

describe('ThetaOnePayButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThetaOnePayButtonService]
    });
  });

  it('should be created', inject([ThetaOnePayButtonService], (service: ThetaOnePayButtonService) => {
    expect(service).toBeTruthy();
  }));
});
