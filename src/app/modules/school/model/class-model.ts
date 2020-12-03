import { Discipline } from './discipline-model';
import { Activity } from './activity-model';
import { File } from '@shared/model/file-model';

export interface Class {
  id?: number;
  name?: string;
  description?: string;
  link?: string;
  date?: Date;
  attachment?: File;
  activities?: Activity[];
  discipline?: Discipline;
}
