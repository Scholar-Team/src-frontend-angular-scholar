import { Class } from './../model/class-model';
import { Teacher } from './../model/teacher-model';
import { Classroom } from './../model/classroom-model';
import { File } from '@shared/model/file-model';

export interface DisciplineEntity {
  id?: number;
  name?: string;
  file?: File;
  classrooms?: Classroom[];
  teachers?: Teacher[];
  classes?: Class[];
}
