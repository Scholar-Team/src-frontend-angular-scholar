import { PersonEntity } from './person-entity';

export interface TelephoneEntity {
  id?: number;
  number?: number;
  type?: string;
  person?: PersonEntity;
}
