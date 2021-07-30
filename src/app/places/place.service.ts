import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the heart of New York City.', 'manhattan.jpg', 149.99),
    new Place('p2', 'L\'Amour Toujours', 'A romantic place in Paris', 'francia.jpg', 555),
    new Place('p3', 'The Foggy Palace', 'Not you average city trip', 'palace.jpg', 999)
  ];

  constructor() {}

  get places(): Place[] {
    return [...this._places];
  }

  getPlace(placeId: string) {
    return {...this._places.find(p => p.id === placeId)};
  }

}
