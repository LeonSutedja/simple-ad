import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ADVERTISEMENTS } from './data/mock-advertisement';
import { Advertisement } from './model/advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor() { }

  getAdvertisements(): Observable<Advertisement[]> {
    return of(ADVERTISEMENTS);
  }

  getAdvertisement(id: number): Observable<Advertisement | undefined> {
    return of(ADVERTISEMENTS.find(ad => ad.id === id));
  }
}
