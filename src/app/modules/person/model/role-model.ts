import { Person } from './person-model';
import { Permission } from './permission-model';

export interface Role {
  id?: number;
  name?: string;
  permissions?: Permission[];
  persons?: Person[];
}
