import { RoleEntity } from '../../person/entity/role-entity';
import { Role } from '../model/role-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class RoleMapper extends Mapper<Role, RoleEntity> {

  entityToModel(param: RoleEntity): Role {
    return {
      id: param.id,
      name: param.name,
      permissions: param.permissions,
      persons: param.persons
    };
  }

  modelToEntity(param: Role): RoleEntity {
    return {
      id: param.id,
      name: param.name,
      permissions: param.permissions,
      persons: param.persons
    };
  }

}
