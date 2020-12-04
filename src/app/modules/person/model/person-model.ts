import { File } from '@shared/model/file-model';
import { Address } from '@shared/model/address-model';
import { Role } from './role-model';
import { Telephone } from './telephone-model';

export interface Person {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  birthDate?: Date;
  cpf?: string;
  file?: File;
  telephones?: Telephone[];
  address?: Address;
  roles?: Role[];
}
