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
      file: param.file,
      telephones: param.telephones,
      address: param.address,
      roles: param.roles,
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
      file: param.file,
      telephones: param.telephones,
      address: param.address,
      roles: param.roles,
      school: param.school
    };
  }

}
