import { GroupEntity } from './group-entity';

export interface PermissionEntity {
  id?: number;
  name?: string;
  description?: string;
  groups?: GroupEntity[];
}
