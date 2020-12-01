import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NotAuthorizedComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
