import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DisqusModule } from 'ngx-disqus';

import { RouteComponent } from './route.component';
import { RouteMetricsComponent } from './route-metrics/route-metrics.component';

import { SafeUrlPipe } from './safe-url.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    RouteComponent,
    RouteMetricsComponent,
    SafeUrlPipe,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: RouteComponent
      }
    ]),
    DisqusModule.forRoot('georgia-gravel-routes'),
  ]
})
export class RouteModule { }
