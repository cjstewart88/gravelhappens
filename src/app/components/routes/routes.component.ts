import { Component, OnInit } from '@angular/core';

import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  public routes: object[];

  constructor(
    public routesService: RoutesService
  ) { }

  ngOnInit() {
    this.routes = this.routesService.routes;
  }

}
