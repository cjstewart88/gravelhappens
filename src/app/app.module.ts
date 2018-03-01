import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppRootComponent } from './components/app-root/app-root.component';
import { RoutesComponent } from './components/routes/routes.component';
import { RouteComponent } from './components/route/route.component';

import { RoutesService } from './services/routes.service';

@NgModule({
  declarations: [
    AppRootComponent,
    RoutesComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RoutesService
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
