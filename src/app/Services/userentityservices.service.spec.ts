import { TestBed } from '@angular/core/testing';

import { UserentityservicesService } from './userentityservices.service';

describe('UserentityservicesService', () => {
  let service: UserentityservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserentityservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
