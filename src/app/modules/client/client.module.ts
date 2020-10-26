import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MemberComponent } from './components/member/member.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    HomeComponent,
    MemberComponent,
    NotAuthorizedComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class ClientModule { }
