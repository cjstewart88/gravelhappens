import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesComponent } from './components/routes/routes.component';

const appRoutes: Routes = [
  { path: 'routes', component: RoutesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
