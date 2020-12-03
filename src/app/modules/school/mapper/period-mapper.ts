import { PeriodEntity } from './../entity/period-entity';
import { Period } from './../model/period-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class PeriodMapper extends Mapper<Period, PeriodEntity> {

  entityToModel(param: PeriodEntity): Period {
    return {
      id: param.id,
      period: param.period,
      school: param.school,
      classrooms: param.classrooms
    };
  }

  modelToEntity(param: Period): PeriodEntity {
    return {
      id: param.id,
      period: param.period,
      school: param.school,
      classrooms: param.classrooms
    };
  }

}
