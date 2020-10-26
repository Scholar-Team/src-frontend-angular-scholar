import { PersonEntity } from './person-entity';

export interface TeacherEntity extends PersonEntity {
  disciplines: any[];
}
