import { Feedback } from './../model/feedback-model';
import { Discipline } from './../model/discipline-model';
import { PersonEntity } from '@person/entity/person-entity';

export interface TeacherEntity extends PersonEntity {
  disciplines: Discipline[];
  feedbacks?: Feedback[];
}
