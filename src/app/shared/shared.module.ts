import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';

import { FileService } from './services/file.service';
import { AddressService } from './services/address.service';

@NgModule({
  declarations: [
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    AddressService,
    FileService
  ]
})

export class SharedModule { }
