import { Mapper } from '@core/utils/mapper-abstract';
import { PersonEntity } from './../entity/person-entity';
import { Person } from './../model/person-model';

export class PersonMapper extends Mapper<Person, PersonEntity> {

  entityToModel(param: PersonEntity): Person {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      birthDate: param.birthDate,
      cpf: param.cpf,
      telephones: param.telephones,
      address: param.address,
      groups: param.groups
    };
  }

  modelToEntity(param: Person): PersonEntity {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      birthDate: param.birthDate,
      cpf: param.cpf,
      telephones: param.telephones,
      address: param.address,
      groups: param.groups
    };
  }

}
