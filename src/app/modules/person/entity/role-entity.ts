import { PermissionEntity } from './permission-entity';
import { PersonEntity } from './person-entity';

export interface RoleEntity {
  id?: number;
  name?: string;
  permissions?: PermissionEntity[];
  persons?: PersonEntity[];
}
