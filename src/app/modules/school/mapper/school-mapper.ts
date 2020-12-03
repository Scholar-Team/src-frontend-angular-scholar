import { SchoolEntity } from './../entity/school-entity';
import { School } from './../model/school-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class SchoolMapper extends Mapper<School, SchoolEntity> {

  entityToModel(param: SchoolEntity): School {
    return {
      id: param.id,
      name: param.name,
      site: param.site,
      file: param.file,
      type: param.type,
      periods: param.periods,
      director: param.director,
      address: param.address
    };
  }

  modelToEntity(param: School): SchoolEntity {
    return {
      id: param.id,
      name: param.name,
      site: param.site,
      file: param.file,
      type: param.type,
      periods: param.periods,
      director: param.director,
      address: param.address
    };
  }

}
