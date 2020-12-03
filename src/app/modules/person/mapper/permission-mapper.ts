import { PermissionEntity } from './../entity/permission-entity';
import { Permission } from '../model/Permission-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class PermissionMapper extends Mapper<Permission, PermissionEntity> {

  entityToModel(param: PermissionEntity): Permission {
    return {
      id: param.id,
      name: param.name,
      description: param.description,
      roles: param.roles
    };
  }

  modelToEntity(param: Permission): PermissionEntity {
    return {
      id: param.id,
      name: param.name,
      description: param.description,
      roles: param.roles
    };
  }

}
