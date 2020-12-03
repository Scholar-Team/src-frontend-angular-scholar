import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { CoreModule } from '@core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingModule } from './modules/landing/landing.module';
import { SchoolModule } from './modules/school/school.module';
import { PersonModule } from './modules/person/person.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingModule,
    SchoolModule,
    PersonModule
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
