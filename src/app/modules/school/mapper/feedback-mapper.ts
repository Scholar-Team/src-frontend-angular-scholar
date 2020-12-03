import { FeedbackEntity } from './../entity/feedback-entity';
import { Feedback } from './../model/feedback-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class FeedbackMapper extends Mapper<Feedback, FeedbackEntity> {

  entityToModel(param: FeedbackEntity): Feedback {
    return {
      id: param.id,
      dateTime: param.dateTime,
      feedback: param.feedback,
      grade: param.grade,
      attachment: param.attachment,
      answer: param.answer,
      teacher: param.teacher
    };
  }

  modelToEntity(param: Feedback): FeedbackEntity {
    return {
      id: param.id,
      dateTime: param.dateTime,
      feedback: param.feedback,
      grade: param.grade,
      attachment: param.attachment,
      answer: param.answer,
      teacher: param.teacher
    };
  }

}
