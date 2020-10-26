import { Group } from './group-model';

export interface Permission {
  id?: number;
  name?: string;
  description?: string;
  groups?: Group[];
}
