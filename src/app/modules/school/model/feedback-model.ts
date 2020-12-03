import { Teacher } from './teacher-model';
import { Answer } from './answer-model';
import { File } from '@shared/model/file-model';

export interface Feedback {
  id?: number;
  dateTime?: Date;
  feedback?: string;
  grade?: string;
  attachment?: File;
  answer?: Answer;
  teacher?: Teacher;
}
