import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';

import { PersonService } from './services/person.service';
import { PermissionService } from './services/permission.service';
import { TelephoneService } from './services/telephone.service';
import { RoleService } from './services/role.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonRoutingModule
  ],
  providers: [
    PersonService,
    PermissionService,
    RoleService,
    TelephoneService
  ]
})
export class PersonModule { }
