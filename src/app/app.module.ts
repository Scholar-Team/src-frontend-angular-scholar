import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { CoreModule } from '@core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientModule } from '@modules/client/client.module';
import { LandingModule } from './modules/landing/landing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientModule,
    LandingModule
  ],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule { }
