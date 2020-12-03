import { SchoolEntity } from './school-entity';
import { PersonEntity } from '@person/entity/person-entity';

export interface DirectorEntity extends PersonEntity {
  school: SchoolEntity;
}
