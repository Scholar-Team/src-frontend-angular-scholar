import { FileEntity } from '@shared/entity/file-entity';
import { ClassEntity } from './class-entity';
import { ClassroomEntity } from './classroom-entity';
import { Answer } from './../model/answer-model';

export interface ActivityEntity {
  id?: number;
  name?: string;
  description?: string;
  initialDate?: Date;
  finalDate?: Date;
  attachment?: FileEntity;
  classroom?: ClassroomEntity;
  classes?: ClassEntity[];
  answers?: Answer[];
}
