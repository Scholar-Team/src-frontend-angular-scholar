import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
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

import { ModalComponent } from './components/modal/modal.component';
import { RegisterSchoolComponent } from './components/register-school/register-school.component';
import { RegisterDirectorComponent } from './components/register-director/register-director.component';
import { SchoolModule } from '@modules/school/school.module';

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
    ModalComponent,
    RegisterSchoolComponent,
    RegisterDirectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
    ButtonModule,
    AngularTiltModule,
    FileUploadModule,
    DialogModule,
    SchoolModule
  ]
})
export class LandingModule { }
