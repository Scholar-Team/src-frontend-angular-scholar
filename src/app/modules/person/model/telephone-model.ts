import { Person } from './person-model';

export interface Telephone {
  id?: number;
  number?: number;
  type?: string;
  person?: Person;
}
