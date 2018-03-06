import { Component, OnInit, Input } from '@angular/core';

import { Route } from '../../interfaces/route';

@Component({
  selector: 'app-route-metrics',
  templateUrl: './route-metrics.component.html',
  styleUrls: ['./route-metrics.component.css']
})
export class RouteMetricsComponent implements OnInit {
  @Input() route: Route;

  constructor() { }

  ngOnInit() {
  }

}
