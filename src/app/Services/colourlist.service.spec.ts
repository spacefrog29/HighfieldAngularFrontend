import { TestBed } from '@angular/core/testing';

import { ColourEntityService } from './colourlist.service';

describe('UserentityservicesService', () => {
  let service: ColourEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColourEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
