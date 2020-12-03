import { Classroom } from './../model/classroom-model';
import { School } from './../model/school-model';
import { SchoolPeriod } from './../model/period-model';

export interface PeriodEntity {
  id?: number;
  period?: SchoolPeriod;
  school?: School;
  classrooms?: Classroom[];
}
