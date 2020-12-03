import { Period } from './../model/period-model';
import { Director } from './../model/director-model';
import { Address } from '@shared/model/address-model';
import { SchoolType } from './../model/school-model';
import { File } from '@shared/model/file-model';

export interface SchoolEntity {
  id?: number;
  name?: string;
  site?: string;
  file?: File;
  type?: SchoolType;
  periods?: Period[];
  director?: Director;
  address?: Address;
}
