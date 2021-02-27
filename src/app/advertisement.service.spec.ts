import { TestBed } from '@angular/core/testing';

import { AdvertisementService } from './advertisement.service';

describe('AdvertisementService', () => {
  let service: AdvertisementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertisementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return advertisement list', () => {
    service.getAdvertisements().subscribe(
      list => expect(list.length).toBeGreaterThan(0)
    );
  });

  it('should return advertisement with id', () => {
    service.getAdvertisement(11).subscribe(
      model => expect(model?.id).toEqual(11)
    );
  });

  it('should return undefined advertisement with unknown id', () => {
    service.getAdvertisement(8).subscribe(
      model => expect(model).toBeUndefined()
    );
  });
});
