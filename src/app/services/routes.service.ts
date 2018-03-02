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
      longDescription:
        `<p>You'll start this route out in the Cochran Mill Park parking lot, be 
        sure to take some cash or a credit card, there's a small fee. There's bathrooms in case ya need'em
        and picknic tables to enjoy some grub after your ride.</p>
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
      longDescription:
        `<p><img src="/assets/soggy-feet/5.JPG" class="floating-left-img">Juliette Park on the Ocmulgee River is where you'll unload for this route. Take in the river
        and listen to the water rush over the falls just below before you head off. Beware, there's no 
        bathroom's in sight, so take care of that before or once your deep in the Piedmont Wildlife 
        Management Area. There's a couple of picknic tables for smashing your post ride food, so be sure 
        to pack something to enjoy.</p><br/>
        <p>Head over the bridge and through a small neighborhood and you're on the gravel. You'll remain
        there for 95% of your ride. Except for the four creek crossings, which is how this ride got it's name. Three of 
        the creeks are crossable on gravel bikes, leaving one you have to get creative on. Toss your shoes
        over, walk through it, or <i>attempt</i> to ride through it... either way, you've got to make it to
        the other side.</p>
        <img src="/assets/soggy-feet/2.JPG" class="bottom-img first">
        <img src="/assets/soggy-feet/1.JPG" class="bottom-img">
        <p> As you make your way through the Peidmont Wildlife Management Area
        you'll roll over various kinds of gravel. Some fine silky roads and some that are a little more 
        chunky, making the decents feel like your floating. You'll encounter encounter no homes once
        you're in the green zone, so make sure you're prepared with a tube or two and snacks. It's about
        as peaceful as you can get.</p>
        <img src="/assets/soggy-feet/3.JPG" class="bottom-img first">
        <img src="/assets/soggy-feet/4.JPG" class="bottom-img">
        <p>Rolling back over the bridge you'll be thinking about taking dip in the river before heading 
        back to civilization... or maybe you'll be regretting you didn't attempt to bunny hop the smallest
        creek.</p>
        <img src="/assets/soggy-feet/6.JPG" class="solo-img">`
    }
  ];

  public getRoute(id) {
    return this.routes.find((r) => {
      return r.id === id;
    });
  }
}
