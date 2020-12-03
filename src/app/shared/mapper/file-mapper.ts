import { Mapper } from '@core/utils/mapper-abstract';
import { FileEntity } from '@shared/entity/file-entity';
import { File } from './../model/file-model';

export class FileMapper extends Mapper<File, FileEntity> {

  entityToModel(param: FileEntity): File {
    return {
      id: param.id,
      name: param.name,
      fullName: param.fullName,
      contentType: param.contentType,
      size: param.size,
      url: param.url
    };
  }

  modelToEntity(param: File): FileEntity {
    return {
      id: param.id,
      name: param.name,
      fullName: param.fullName,
      contentType: param.contentType,
      size: param.size,
      url: param.url
    };
  }

}
