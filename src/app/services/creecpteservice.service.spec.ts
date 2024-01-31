import { TestBed } from '@angular/core/testing';

import { CreecpteserviceService } from './creecpteservice.service';

describe('CreecpteserviceService', () => {
  let service: CreecpteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreecpteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
