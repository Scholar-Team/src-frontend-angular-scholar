import { ClassroomEntity } from './classroom-entity';
import { AnswerEntity } from './answer-entity';
import { Answer } from './../model/answer-model';
import { Classroom } from './../model/classroom-model';
import { PersonEntity } from '@person/entity/person-entity';

export interface StudentEntity extends PersonEntity {
  classroom: ClassroomEntity;
  answers?: Answer[];
}

