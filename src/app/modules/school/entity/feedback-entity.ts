import { FileEntity } from '@shared/entity/file-entity';
import { Teacher } from './../model/teacher-model';
import { Answer } from './../model/answer-model';

export interface FeedbackEntity {
  id?: number;
  dateTime?: Date;
  feedback?: string;
  grade?: string;
  attachment?: FileEntity;
  answer?: Answer;
  teacher?: Teacher;
}
