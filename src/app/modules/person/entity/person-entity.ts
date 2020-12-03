import { RoleEntity } from './role-entity';
import { AddressEntity } from '@shared/entity/address-entity';
import { TelephoneEntity } from './telephone-entity';

export interface PersonEntity {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  birthDate?: Date;
  cpf?: string;
  telephones?: TelephoneEntity[];
  address?: AddressEntity;
  roles?: RoleEntity[];
}

