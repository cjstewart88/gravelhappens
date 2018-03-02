import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesComponent } from './components/routes/routes.component';
import { RouteComponent } from './components/route/route.component';

const appRoutes: Routes = [
  { path: 'routes/:id', component: RouteComponent },
  { path: '', component: RoutesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
