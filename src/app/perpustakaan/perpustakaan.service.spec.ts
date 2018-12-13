/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PerpustakaanService } from './perpustakaan.service';

describe('Service: Perpustakaan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerpustakaanService]
    });
  });

  it('should ...', inject([PerpustakaanService], (service: PerpustakaanService) => {
    expect(service).toBeTruthy();
  }));
});
