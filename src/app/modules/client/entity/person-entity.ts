import { AddressEntity } from './address-entity';
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
  groups?: any[];
}

