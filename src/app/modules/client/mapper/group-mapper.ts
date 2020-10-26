import { GroupEntity } from './../entity/Group-entity';
import { Group } from './../model/Group-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class GroupMapper extends Mapper<Group, GroupEntity> {

  entityToModel(param: GroupEntity): Group {
    return {
      id: param.id,
      name: param.name,
      permissions: param.permissions,
      persons: param.persons
    };
  }
  modelToEntity(param: Group): GroupEntity {
    return {
      id: param.id,
      name: param.name,
      permissions: param.permissions,
      persons: param.persons
    };
  }

}
