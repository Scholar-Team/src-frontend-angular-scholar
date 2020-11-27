import { RoleEntity } from './role-entity';

export interface PermissionEntity {
  id?: number;
  name?: string;
  description?: string;
  roles?: RoleEntity[];
}
