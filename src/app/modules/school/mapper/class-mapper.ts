import { ClassEntity } from './../entity/class-entity';
import { Class } from './../model/class-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class ClassMapper extends Mapper<Class, ClassEntity> {

  entityToModel(param: ClassEntity): Class {
    return {
      id: param.id,
      name: param.name,
      description: param.description,
      link: param.link,
      date: param.date,
      attachment: param.attachment,
      activities: param.activities,
      discipline: param.discipline
    };
  }

  modelToEntity(param: Class): ClassEntity {
    return {
      id: param.id,
      name: param.name,
      description: param.description,
      link: param.link,
      date: param.date,
      attachment: param.attachment,
      activities: param.activities,
      discipline: param.discipline
    };
  }

}
