import { RoleEntity } from '../../person/entity/role-entity';

export interface PermissionEntity {
  id?: number;
  name?: string;
  description?: string;
  roles?: RoleEntity[];
}
