import { TestBed } from '@angular/core/testing';

import { ComptelistserviceService } from './comptelistservice.service';

describe('ComptelistserviceService', () => {
  let service: ComptelistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptelistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
