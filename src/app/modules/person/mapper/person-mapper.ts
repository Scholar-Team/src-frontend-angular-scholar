import { Mapper } from '@core/utils/mapper-abstract';
import { PersonEntity } from '../../person/entity/person-entity';
import { Person } from './../model/person-model';

export class PersonMapper extends Mapper<Person, PersonEntity> {

  entityToModel(param: PersonEntity): Person {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      birthDate: param.birthDate,
      cpf: param.cpf,
      file: param.file,
      telephones: param.telephones,
      address: param.address,
      roles: param.roles
    };
  }

  modelToEntity(param: Person): PersonEntity {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      birthDate: param.birthDate,
      cpf: param.cpf,
      file: param.file,
      telephones: param.telephones,
      address: param.address,
      roles: param.roles
    };
  }

}
