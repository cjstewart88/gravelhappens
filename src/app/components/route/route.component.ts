import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  public route: {};

  constructor(
    private activatedRoute: ActivatedRoute,
    public routesService: RoutesService
  ) { }

  ngOnInit() {
    const routeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.route = this.routesService.getRoute(routeId);
  }

}
