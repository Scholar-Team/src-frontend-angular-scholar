import { AnswerEntity } from './../entity/answer-entity';
import { Answer } from './../model/answer-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class AnswerMapper extends Mapper<Answer, AnswerEntity> {

  entityToModel(param: AnswerEntity): Answer {
    return {
      id: param.id,
      dateTime: param.dateTime,
      description: param.description,
      activity: param.activity,
      student: param.student,
      feedback: param.feedback,
      attachment: param.attachment
    };
  }

  modelToEntity(param: Answer): AnswerEntity {
    return {
      id: param.id,
      dateTime: param.dateTime,
      description: param.description,
      activity: param.activity,
      student: param.student,
      feedback: param.feedback,
      attachment: param.attachment
    };
  }

}
