import { TestBed, inject } from '@angular/core/testing';

import { MessgeService } from './messge.service';

describe('MessgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessgeService]
    });
  });

  it('should be created', inject([MessgeService], (service: MessgeService) => {
    expect(service).toBeTruthy();
  }));
});
