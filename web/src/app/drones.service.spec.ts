import { TestBed, inject } from '@angular/core/testing';

import { DronesService } from './drones.service';

describe('DronesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DronesService]
    });
  });

  it('should be created', inject([DronesService], (service: DronesService) => {
    expect(service).toBeTruthy();
  }));
});
