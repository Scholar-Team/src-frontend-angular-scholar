import { Answer } from './answer-model';
import { Classroom } from './classroom-model';
import { Person } from '@person/model/person-model';

export interface Student extends Person {
  classroom?: Classroom;
  answers?: Answer[];
}
