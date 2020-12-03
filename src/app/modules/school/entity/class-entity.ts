import { DisciplineEntity } from './discipline-entity';
import { ActivityEntity } from './activity-entity';
import { FileEntity } from '@shared/entity/file-entity';

export interface ClassEntity {
  id?: number;
  name?: string;
  description?: string;
  link?: string;
  date?: Date;
  attachment?: FileEntity;
  activities?: ActivityEntity[];
  discipline?: DisciplineEntity;
}
