import { RoleEntity } from './role-entity';
import { AddressEntity } from '@shared/entity/address-entity';
import { TelephoneEntity } from './telephone-entity';
import { File } from '@shared/model/file-model';

export interface PersonEntity {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  birthDate?: Date;
  cpf?: string;
  file?: File;
  telephones?: TelephoneEntity[];
  address?: AddressEntity;
  roles?: RoleEntity[];
}

