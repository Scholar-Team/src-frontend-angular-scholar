import { BaseHttpService } from '@core/services/base-http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    BaseHttpService
  ]
})

export class CoreModule { }
