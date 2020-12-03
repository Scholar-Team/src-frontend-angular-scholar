import { PeriodEntity } from './period-entity';
import { DisciplineEntity } from './discipline-entity';
import { FileEntity } from '@shared/entity/file-entity';
import { ActivityEntity } from './activity-entity';
import { Student } from './../model/student-model';

export interface ClassroomEntity {
  id?: number;
  name?: string;
  disciplines?: DisciplineEntity[];
  file?: FileEntity;
  activities?: ActivityEntity[];
  students?: Student[];
  period?: PeriodEntity;
}
