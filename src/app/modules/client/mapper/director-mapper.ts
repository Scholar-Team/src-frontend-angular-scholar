import { Mapper } from '@core/utils/mapper-abstract';
import { DirectorEntity } from '../entity/director-entity';
import { Director } from '../model/director-model';

export class DirectorMapper extends Mapper<Director, DirectorEntity> {

  entityToModel(param: DirectorEntity): Director {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      birthDate: param.birthDate,
      cpf: param.cpf,
      telephones: param.telephones,
      address: param.address,
      groups: param.groups,
      school: param.school
    };
  }
  modelToEntity(param: Director): DirectorEntity {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      birthDate: param.birthDate,
      cpf: param.cpf,
      telephones: param.telephones,
      address: param.address,
      groups: param.groups,
      school: param.school
    };
  }

}
