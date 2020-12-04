import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { RegisterSchoolComponent } from './components/register-school/register-school.component';
import { LoginComponent } from './components/login/login.component';
import { NotAuthorizedComponent } from '@shared/pages/not-authorized/not-authorized.component';
import { RegisterDirectorComponent } from './components/register-director/register-director.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register-school',
        component: RegisterSchoolComponent
      },
      {
        path: 'register-director',
        component: RegisterDirectorComponent
      }
    ]
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule { }
