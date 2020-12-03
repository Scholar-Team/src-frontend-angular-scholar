import { School } from './school-model';
import { Person } from '@person/model/person-model';

export interface Director extends Person {
  school?: School;
}
