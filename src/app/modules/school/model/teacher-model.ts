import { Feedback } from './feedback-model';
import { Discipline } from './discipline-model';
import { Person } from '@person/model/person-model';

export interface Teacher extends Person {
  disciplines?: Discipline[];
  feedbacks?: Feedback[];
}
