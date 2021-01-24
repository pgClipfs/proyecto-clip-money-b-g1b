import { TestBed } from '@angular/core/testing';

import { BilleteraMainService } from './billetera-main.service';

describe('BilleteraMainService', () => {
  let service: BilleteraMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilleteraMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
