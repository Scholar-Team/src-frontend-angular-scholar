import { PermissionEntity } from './../entity/Permission-entity';
import { Permission } from './../model/Permission-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class PermissionMapper extends Mapper<Permission, PermissionEntity> {

  entityToModel(param: PermissionEntity): Permission {
    return {
      id: param.id,
      name: param.name,
      description: param.description,
      groups: param.groups
    };
  }
  modelToEntity(param: Permission): PermissionEntity {
    return {
      id: param.id,
      name: param.name,
      description: param.description,
      groups: param.groups
    };
  }

}
