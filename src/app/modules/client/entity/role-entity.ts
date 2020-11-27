import { PersonEntity } from './person-entity';
import { PermissionEntity } from './permission-entity';

export interface RoleEntity {
  id?: number;
  name?: string;
  permissions?: PermissionEntity[];
  persons?: PersonEntity[];
}
