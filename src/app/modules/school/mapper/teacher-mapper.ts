import { Mapper } from '@core/utils/mapper-abstract';
import { TeacherEntity } from './../entity/teacher-entity';
import { Teacher } from './../model/teacher-model';

export class TeacherMapper extends Mapper<Teacher, TeacherEntity> {

  entityToModel(param: TeacherEntity): Teacher {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      birthDate: param.birthDate,
      cpf: param.cpf,
      file: param.file,
      telephones: param.telephones,
      address: param.address,
      roles: param.roles,
      disciplines: param.disciplines,
      feedbacks: param.feedbacks
    };
  }

  modelToEntity(param: Teacher): TeacherEntity {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      birthDate: param.birthDate,
      cpf: param.cpf,
      file: param.file,
      telephones: param.telephones,
      address: param.address,
      roles: param.roles,
      disciplines: param.disciplines,
      feedbacks: param.feedbacks
    };
  }

}
