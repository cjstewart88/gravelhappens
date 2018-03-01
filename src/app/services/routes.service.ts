import { Injectable } from '@angular/core';

@Injectable()
export class RoutesService {
  constructor() {}

  public routes = [
    {
      id: 'the-dirty-sheets',
      name: 'The Dirty Sheets',
      location: 'Palmetto, GA',
      distance: 19.9,
      rideWithGpsId: 26950038,
      pictures: ['1.JPG', '2.JPG', '3.JPG', '4.JPG']
    },
    {
      id: 'soggy-feet',
      name: 'Soggy Feet',
      location: 'Juliette, GA',
      distance: 27.8,
      rideWithGpsId: 26914844,
      pictures: ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG']
    }
  ];

  public getRoute(id) {
    return this.routes.find((r) => {
      return r.id === id;
    });
  }
}
