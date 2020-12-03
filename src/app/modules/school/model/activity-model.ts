import { Answer } from './answer-model';
import { Class } from './class-model';
import { Classroom } from './classroom-model';
import { File } from '@shared/model/file-model';

export interface Activity {
  id?: number;
  name?: string;
  description?: string;
  initialDate?: Date;
  finalDate?: Date;
  attachment?: File;
  classroom?: Classroom;
  classes?: Class[];
  answers?: Answer[];
}
