import { TestBed } from '@angular/core/testing';

import { FfhgService } from './ffhg.service';

describe('FfhgService', () => {
  let service: FfhgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FfhgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
