import { ClassroomEntity } from './../entity/classroom-entity';
import { Classroom } from './../model/classroom-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class ClassroomMapper extends Mapper<Classroom, ClassroomEntity> {

  entityToModel(param: ClassroomEntity): Classroom {
    return {
      id: param.id,
      name: param.name,
      disciplines: param.disciplines,
      file: param.file,
      activities: param.activities,
      students: param.students,
      period: param.period
    };
  }

  modelToEntity(param: Classroom): ClassroomEntity {
    return {
      id: param.id,
      name: param.name,
      disciplines: param.disciplines,
      file: param.file,
      activities: param.activities,
      students: param.students,
      period: param.period
    };
  }

}
