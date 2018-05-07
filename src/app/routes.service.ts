import { Injectable } from '@angular/core';

import { Route } from './route';

@Injectable()
export class RoutesService {
  constructor() {}

  public routes: Route[] = [
    {
      id: 'pine-log',
      name: 'Pine Long',
      location: 'White, GA',
      distance: 19.3,
      elevation: 1886,
      rideWithGpsId: 27402380,
      longDescription:
        `
        <p>
          For this route, you'll park at the <a href="https://goo.gl/maps/Rmd3VHeAYQ92" target="_blank" >Pine Log parking lot</a>.
          There's plenty of parking to go around, but that's about it. You'll spot an info board over
          next to the ranger's station with a check-in book. This wildlife management area is closed all day during
          deer firearms seasons and before 10am during deer and turkey archery season. Please check out the
          <a href="http://georgiawildlife.com/pine-log-wma" target="_blank">Pine Log Wildlife Management Area's website</a>
          for additional info on regulations and closings.
        </p>

        <p>
          This route starts with a small stream crossing and climb to a fire pit with a view. By the time you
          reach the top of this first climb, you'll be wondering what you've gotten yourself into. Keep an
          eye on your water bottles, the chunky terrain will have them raddling around the whole time.
        </p>

        <div class="img-wrapper two-imgs">
          <img src="/assets/pine-log/1.JPG">
          <img src="/assets/pine-log/2.JPG">
        </div>

        <div class="img-wrapper single-img">
          <img src="/assets/pine-log/3.JPG">
        </div>

        <p>
          Get ready, the first descent gets a little sketchy. It had me yerning for a little suspension
          and 3 inch tires so I could blast down it. Instead, breaks were squeezed and my
          <a href="https://surlybikes.com/parts/tires/knard_41" target="_blank">41mm Knard's</a> skidded down
          to a sweet creek where I took a deep breath and sent a text to my wife, "Half way in, this is harder
          than I thought."
        </p>

        <div class="img-wrapper two-imgs">
          <img src="/assets/pine-log/4.JPG">
          <img src="/assets/pine-log/5.JPG">
        </div>

        <p>
          Turns out the second half was just as gnarly as the first, and a little more. You'll spin up
          and down a couple peaks, gripping your bars tight for the desents. At 11.5 miles in a sharp
          left will come up. It's time to jump off the bike for a little hike-a-bike. This hill is not
          ridable, so take your time, it's only 0.3 miles. At the top you'll be thankful to see
          a gravel road and rewarded with a view.
        </p>

        <div class="img-wrapper single-img">
          <img src="/assets/pine-log/6.JPG">
        </div>

        <div class="img-wrapper single-img">
          <img src="/assets/pine-log/7.JPG">
        </div>

        <p>
          After you rail down Sugar Hill, you'll have roughly 7 miles left and be faced with another
          sharp left that takes you behind a large water tank. The trail you'll land on looks like
          it's made for ATVs, but it's ridable and only 0.5 miles. Eventually it turns into a nice dirt
          roads that leads you to civilization.
        </p>

        <div class="img-wrapper two-imgs">
          <img src="/assets/pine-log/8.JPG">
          <img src="/assets/pine-log/9.JPG">
        </div>

        <p>
          You'll climb about 2 miles of pavement before coasting down into the parking lot and heading
          back home. This one will leave you feeling beaten up and thankful it's over, but glad you did it.
        </p>
        `
    },
    {
      id: 'murder-creek',
      name: 'Murder Creek',
      location: 'Jasper County, GA',
      distance: 25.4,
      elevation: 1299,
      rideWithGpsId: 26990986,
      longDescription:
        `
        <p>
          To start this route you'll park along the banks of
          <a href="https://goo.gl/maps/WSwB6WVeSLq" target="_blank">Boyle Murder Lake</a> in the
          Charlie Elliott Wildlife Center. Bring your fishing pole if you're into it, Murder Creek
          Lake is across the road and you'll pass a few more fishing holes along the way. There's a
          picnic table (with a chill view), porta potty, and plenty of free parking.
        </p>
        <div class="img-wrapper single-img">
          <img src="/assets/murder-creek/1.jpg">
        </div>
        <p>
          There's around 3 miles of paved road on this route, the rest of the roads range from
          packed red clay, chunky loose rock, and silky smooth dirt. Keep your wits about you, the
          terrain changes often and you'll want to pick your line wisely if your running thinner rubber.
        </p>
        <div class="img-wrapper two-imgs">
          <img src="/assets/murder-creek/2.jpg">
          <img src="/assets/murder-creek/3.jpg">
        </div>
        <p>
          Several places along the way you'll fill your nostrils with the smell of manure. It's good for
          the soul... so take it in, "moo" at the cows, and enjoy yourself. Keep your eyes peeled, because
          not only are there cows, but there's rumor that big foot roams the area.
        </p>
        <p>
          Near the end of the route you'll creep up a long gravel hill and be rewarded with a paved
          descent, awaiting to be bombed at speeds over 30mph. Careful though, the asphalt
          gets sketchy at the bottom, leaving you something to laugh about with your crew.
        </p>
        <p>
          More than likely you hit this route early on a Saturday or Sunday morning, as you roll back
          around to the lakes the fishers will multiplied. If you brought your pole you can join'em or
          you can enjoy a pecan roll and head home.
        </p>
        <div class="img-wrapper two-imgs">
          <img src="/assets/murder-creek/4.jpg">
          <img src="/assets/murder-creek/5.jpg">
        </div>
        <div class="img-wrapper two-imgs">
          <img src="/assets/murder-creek/6.jpg">
          <img src="/assets/murder-creek/7.jpg">
        </div>
        `
    },
    {
      id: 'the-dirty-sheets',
      name: 'The Dirty Sheets',
      location: 'Palmetto, GA',
      distance: 19.9,
      elevation: 927,
      rideWithGpsId: 26950038,
      longDescription:
        `
        <p>
          You'll start this route out in the <a href="https://goo.gl/maps/bCse4pYrH2o" target="_blank">Cochran Mill Park</a>
          parking lot, be sure to take some cash or a credit card, there's a small fee. There's
          bathrooms in case ya need'em and picnic tables to enjoy some grub after your ride.
        </p>
        <div class="img-wrapper single-img">
          <img src="/assets/the-dirty-sheets/route-preview.png">
        </div>
        <p>
          The route starts out on Cochran Mill Rd, but don't worry, shortly after
          you'll be humming along the gravel for most of the rest of the ride. You'll
          travel past country homes and farms, some great scenery worth stopping and
          enjoying. On the gravel you don't have to worry about spotting too many cars,
          but keep an eye out for a dog or two.
        </p>
        <div class="img-wrapper two-imgs">
          <img src="/assets/the-dirty-sheets/3.JPG">
          <img src="/assets/the-dirty-sheets/4.JPG">
        </div>
        <p>
          The last 6 miles will feel the most remote and the road turns a little washy,
          after a rain prepare to navigate through a bit of mud. The rutted road is great
          on this section, it provides some technical downhills to let lose on. Keep in
          mind horse riders can be found on this stretch.
        </p>
        <p>
          Finishing this route up will leave you thinking about the next time you can get
          away to the gravel.
        </p>
        `
    },
    {
      id: 'soggy-feet',
      name: 'Soggy Feet',
      location: 'Juliette, GA',
      distance: 27.8,
      elevation: 1753,
      rideWithGpsId: 26914844,
      longDescription:
        `
        <p>
          <a href="https://goo.gl/maps/ucnqzCzmMJG2" target="_blank">Juliette Park on the Ocmulgee River</a>
          is where you'll unload for this route. Take in the river and listen to the water rush over the falls
          just below before you head off. Beware, there's no bathroom's in sight, so take care of that before
          or once your deep in the Piedmont Wildlife Management Area. There's a couple of picnic tables for
          smashing your post ride food, so be sure to pack something to enjoy.
        </p>
        <div class="img-wrapper two-imgs">
          <img src="/assets/soggy-feet/4.JPG">
          <img src="/assets/soggy-feet/5.JPG">
        </div>
        <div class="img-wrapper two-imgs">
          <img src="/assets/soggy-feet/1.JPG">
          <img src="/assets/soggy-feet/2.JPG">
        </div>
        <p>
          Head over the bridge and through a small neighborhood and you're on the gravel. You'll remain
          there for 95% of your ride. Except for the four creek crossings, which is how this ride got it's name. Three of
          the creeks are crossable on gravel bikes, leaving one you have to get creative on. Toss your shoes
          over, walk through it, or <i>attempt</i> to ride through it... either way, you've got to make it to
          the other side.
        </p>
        <p>
          As you make your way through the Peidmont Wildlife Management Area
          you'll roll over various kinds of gravel. Some fine silky roads and some that are a little more
          chunky, making the decents feel like your floating. You'll encounter no homes once
          you're in the green zone, so make sure you're prepared with a tube or two and snacks. It's about
          as peaceful as you can get.
        </p>
        <p>
          Rolling back over the bridge you'll be thinking about taking dip in the river before heading
          back to civilization... or maybe you'll be regretting you didn't attempt to bunny hop the smallest
          creek.
        </p>
        <div class="img-wrapper single-img">
          <img src="/assets/soggy-feet/6.JPG">
        </div>
        `
    }
  ];

  public getRoute(id) {
    return this.routes.find((r) => {
      return r.id === id;
    });
  }
}
