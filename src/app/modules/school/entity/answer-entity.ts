import { ActivityEntity } from './activity-entity';
import { FeedbackEntity } from './feedback-entity';
import { FileEntity } from '@shared/entity/file-entity';
import { Student } from './../model/student-model';

export interface AnswerEntity {
  id?: number;
  dateTime?: Date;
  description?: string;
  activity?: ActivityEntity;
  student?: Student;
  feedback?: FeedbackEntity;
  attachment?: FileEntity;
}
