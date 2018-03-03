import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DisqusModule } from "ngx-disqus";

import { AppRoutingModule } from './app-routing.module';

import { AppRootComponent } from './components/app-root/app-root.component';
import { RoutesComponent } from './components/routes/routes.component';
import { RouteComponent } from './components/route/route.component';

import { RoutesService } from './services/routes.service';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppRootComponent,
    RoutesComponent,
    RouteComponent,
    SafeUrlPipe,
    SafeHtmlPipe
  ],
  imports: [
    DisqusModule.forRoot('disqus_shortname'),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RoutesService
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
