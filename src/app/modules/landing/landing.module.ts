import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AngularTiltModule } from 'angular-tilt';
import { FileUploadModule } from 'primeng/fileupload';

import { TeamComponent } from './components/team/team.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterSchoolComponent } from './components/register-school/register-school.component';
import { ModalComponent } from './components/modal/modal.component';

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
    LoginComponent,
    RegisterSchoolComponent,
    ModalComponent
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
    ReactiveFormsModule,
    FileUploadModule
  ]
})
export class LandingModule { }
