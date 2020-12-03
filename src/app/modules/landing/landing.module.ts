import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AngularTiltModule } from 'angular-tilt';

import { TeamComponent } from './components/team/team.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingComponent,
    BenefitsComponent,
    FooterComponent,
    HeaderComponent,
    ProjectComponent,
    SliderComponent,
    TeamComponent,
    ContactComponent,
    LoginModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
    FontAwesomeModule,
    DialogModule,
    ButtonModule,
    AngularTiltModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
