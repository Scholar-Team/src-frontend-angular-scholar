import { Classroom } from './classroom-model';
import { School } from './school-model';

export interface Period {
  id?: number;
  period?: SchoolPeriod;
  school?: School;
  classrooms?: Classroom[];
}

export enum SchoolPeriod {
  MATUTINO,
  VESPERTINO,
  NOTURNO,
  INTEGRAL_MATUTINO_VESPERTINO,
  INTEGRAL_VESPERTINO_NOTURNO
}
