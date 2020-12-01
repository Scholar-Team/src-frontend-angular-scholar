import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TeamComponent } from './components/team/team.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    LandingComponent,
    BenefitsComponent,
    FooterComponent,
    HeaderComponent,
    ProjectComponent,
    SliderComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
    FontAwesomeModule
  ]
})
export class LandingModule { }
