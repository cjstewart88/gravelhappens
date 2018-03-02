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
      elevation: 927,
      rideWithGpsId: 26950038,
      pictures: ['1.JPG', '2.JPG', '3.JPG', '4.JPG'],
      longDescription:
        `<p>You'll start this route out in the Cochran Mill Park parking lot, be 
        sure to take some cash or a credit card, there's a small fee. There's bathrooms 
        and picknic tables on the site. Bring a lunch and enjoy it after a morning of riding.</p>
        <p><img src="/assets/the-dirty-sheets/1.JPG" class="floating-left-img"> The route starts 
        out on Cochran Mill Rd, but don't worry, shortly after you'll be humming along the gravel 
        for most of the rest of the ride. </p> <p>You'll travel past country homes and farms, some 
        great scenery worth stopping and enjoying. On the gravel you don't have to worry about spotting 
        to many cars, but keep an eye our for a dog or two.</p> <br/> <br/>
        <p><img src="/assets/the-dirty-sheets/4.JPG" class="floating-right-img"> The last 6 miles will 
        feel the most remote and the road turns a little washy, after a rain prepare to navigate through 
        a bit of mud.</p> <p>The ruted road is great on this section, it provides some technical 
        downhills to let lose on. Keep in mind horse riders can be found on this stretch. Finishing
        this route up will leave you thinking about the next time you can get away to the gravel.</p>
        <br/><br/>
        <img src="/assets/the-dirty-sheets/2.JPG" class="bottom-img first">
        <img src="/assets/the-dirty-sheets/3.JPG" class="bottom-img">`
    },
    {
      id: 'soggy-feet',
      name: 'Soggy Feet',
      location: 'Juliette, GA',
      distance: 27.8,
      elevation: 1753,
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
