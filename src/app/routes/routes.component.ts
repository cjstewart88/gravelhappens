import { Component, OnInit } from '@angular/core';

import { Route } from '../route';
import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  public routes: Route[];

  constructor(
    public routesService: RoutesService
  ) { }

  ngOnInit() {
    this.routes = this.routesService.routes;
  }

}
