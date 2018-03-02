import { Component, OnInit } from '@angular/core';

import { Route } from '../../interfaces/route';
import { RoutesService } from '../../services/routes.service';

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
