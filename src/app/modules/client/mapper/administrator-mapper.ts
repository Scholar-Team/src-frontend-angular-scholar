import { Mapper } from '@core/utils/mapper-abstract';
import { AdministratorEntity } from './../entity/administrator-entity';
import { Administrator } from './../model/administrator-model';

export class AdministratorMapper extends Mapper<Administrator, AdministratorEntity> {

  entityToModel(param: AdministratorEntity): Administrator {
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
  modelToEntity(param: Administrator): AdministratorEntity {
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
