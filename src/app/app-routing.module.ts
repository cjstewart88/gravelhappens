import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanLoadAdminSectionGuard } from './can-load-admin-section.guard';

const appRoutes: Routes = [
  {
    path: 'admin',
    canLoad: [CanLoadAdminSectionGuard],
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: 'routes',
    loadChildren: 'app/route/route.module#RouteModule'
  },
  {
    path: '',
    loadChildren: 'app/routes/routes.module#RoutesModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CanLoadAdminSectionGuard
  ]
})
export class AppRoutingModule { }
