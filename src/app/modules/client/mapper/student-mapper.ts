import { Mapper } from '@core/utils/mapper-abstract';
import { StudentEntity } from './../entity/student-entity';
import { Student } from './../model/student-model';

export class StudentMapper extends Mapper<Student, StudentEntity> {

  entityToModel(param: StudentEntity): Student {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      birthDate: param.birthDate,
      cpf: param.cpf,
      telephones: param.telephones,
      address: param.address,
      groups: param.groups,
      classroom: param.classroom
    };
  }
  modelToEntity(param: Student): StudentEntity {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      birthDate: param.birthDate,
      cpf: param.cpf,
      telephones: param.telephones,
      address: param.address,
      groups: param.groups,
      classroom: param.classroom
    };
  }

}
