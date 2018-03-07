import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Route } from '../../interfaces/route';
import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  public route: Route;

  constructor(
    private activatedRoute: ActivatedRoute,
    public routesService: RoutesService,
    private titleService: Title
  ) { }

  private setTitle() {
    const newTitle = `${this.route.name} | Georgia Gravel Routes`;
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    const routeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.route = this.routesService.getRoute(routeId);
    this.setTitle();
  }

}
