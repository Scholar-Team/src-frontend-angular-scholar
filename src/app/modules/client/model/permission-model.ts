import { Role } from './role-model';

export interface Permission {
  id?: number;
  name?: string;
  description?: string;
  roles?: Role[];
}
