import { Period } from './period-model';
import { Student } from './student-model';
import { Activity } from './activity-model';
import { Discipline } from './discipline-model';
import { File } from '@shared/model/file-model';

export interface Classroom {
  id?: number;
  name?: string;
  disciplines?: Discipline[];
  file?: File;
  activities?: Activity[];
  students?: Student[];
  period?: Period;
}
