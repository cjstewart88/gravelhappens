import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppRootComponent } from './components/app-root/app-root.component';
import { RoutesComponent } from './components/routes/routes.component';

@NgModule({
  declarations: [
    AppRootComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
