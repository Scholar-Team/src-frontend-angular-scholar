import { TelephoneEntity } from './../entity/telephone-entity';
import { Telephone } from './../model/telephone-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class TelephoneMapper extends Mapper<Telephone, TelephoneEntity> {

  entityToModel(param: TelephoneEntity): Telephone {
    return {
      id: param.id,
      number: param.number,
      type: param.type,
      person: param.person
    };
  }

  modelToEntity(param: Telephone): TelephoneEntity {
    return {
      id: param.id,
      number: param.number,
      type: param.type,
      person: param.person
    };
  }

}
