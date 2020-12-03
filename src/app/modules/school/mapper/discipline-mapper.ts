import { DisciplineEntity } from './../entity/discipline-entity';
import { Discipline } from './../model/discipline-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class DisciplineMapper extends Mapper<Discipline, DisciplineEntity> {

  entityToModel(param: DisciplineEntity): Discipline {
    return {
      id: param.id,
      name: param.name,
      file: param.file,
      classrooms: param.classrooms,
      teachers: param.teachers,
      classes: param.classes,
    };
  }

  modelToEntity(param: Discipline): DisciplineEntity {
    return {
      id: param.id,
      name: param.name,
      file: param.file,
      classrooms: param.classrooms,
      teachers: param.teachers,
      classes: param.classes,
    };
  }

}
