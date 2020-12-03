import { Activity } from './../model/activity-model';
import { ActivityEntity } from './../entity/activity-entity';
import { Mapper } from '@core/utils/mapper-abstract';

export class ActivityMapper extends Mapper<Activity, ActivityEntity> {

  entityToModel(param: ActivityEntity): Activity {
    return {
      id: param.id,
      name: param.name,
      description: param.description,
      initialDate: param.initialDate,
      finalDate: param.finalDate,
      attachment: param.attachment,
      classroom: param.classroom,
      classes: param.classes,
      answers: param.answers
    };
  }

  modelToEntity(param: Activity): ActivityEntity {
    return {
      id: param.id,
      name: param.name,
      description: param.description,
      initialDate: param.initialDate,
      finalDate: param.finalDate,
      attachment: param.attachment,
      classroom: param.classroom,
      classes: param.classes,
      answers: param.answers
    };
  }

}
