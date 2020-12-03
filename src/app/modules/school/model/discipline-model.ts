import { Class } from './class-model';
import { Teacher } from './teacher-model';
import { Classroom } from './classroom-model';
import { File } from '@shared/model/file-model';

export interface Discipline {
  id?: number;
  name?: string;
  file?: File;
  classrooms?: Classroom[];
  teachers?: Teacher[];
  classes?: Class[];
}
