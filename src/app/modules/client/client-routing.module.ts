import { AuthGuard } from './../../core/guards/auth.guard';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: LandingComponent },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [
        'SH01',
        'SH02'
      ]
    }
  },

  { path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  { path: 'not-authorized', component: NotAuthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }