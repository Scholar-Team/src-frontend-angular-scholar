import { Feedback } from './feedback-model';
import { Student } from './student-model';
import { Activity } from './activity-model';
import { File } from '@shared/model/file-model';

export interface Answer {
  id?: number;
  dateTime?: Date;
  description?: string;
  activity?: Activity;
  student?: Student;
  feedback?: Feedback;
  attachment?: File;
}
