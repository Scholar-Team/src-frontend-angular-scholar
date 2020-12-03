import { Address } from '@shared/model/address-model';
import { Director } from './director-model';
import { Period } from './period-model';
import { File } from '@shared/model/file-model';

export interface School {
  id?: number;
  name?: string;
  site?: string;
  file?: File;
  type?: SchoolType;
  periods?: Period[];
  director?: Director;
  address?: Address;
}

export enum SchoolType {
  ESTADUAL,
  FEDERAL,
  MUNICIPAL,
  PRIVADA
}
