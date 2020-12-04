import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
import { ModalComponent } from '../modules/landing/components/modal/modal.component';

import { FileService } from './services/file.service';
import { AddressService } from './services/address.service';

@NgModule({
  declarations: [
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    AddressService,
    FileService
  ]
})

export class SharedModule { }
