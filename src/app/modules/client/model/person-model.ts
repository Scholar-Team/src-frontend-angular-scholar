import { Address } from './address-model';
import { Telephone } from './telephone-model';

export interface Person {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  birthDate?: Date;
  cpf?: string;
  telephones?: Telephone[];
  address?: Address;
  groups?: any[];
}
