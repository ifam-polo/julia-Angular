import { TestBed } from '@angular/core/testing';

import { GatoApiService } from './gato-api.service';

describe('GatoApiService', () => {
  let service: GatoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
