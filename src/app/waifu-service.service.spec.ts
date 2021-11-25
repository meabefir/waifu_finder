import { TestBed } from '@angular/core/testing';

import { WaifuServiceService } from './waifu-service.service';

describe('WaifuServiceService', () => {
  let service: WaifuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaifuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
