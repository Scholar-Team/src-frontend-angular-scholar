import { CreatedTokenEntity } from './../entity/created-token-entity';
import { CreatedToken } from './../model/created-token-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class CreatedTokenMapper extends Mapper<CreatedToken, CreatedTokenEntity> {

  entityToModel(param: CreatedTokenEntity): CreatedToken {
    return {
      accessToken: param.accessToken,
      tokenType: param.tokenType,
      expiresIn: param.expiresIn,
      scope: param.scope,
      personName: param.personName,
      personId: param.personId,
      jti: param.jti
    };
  }

  modelToEntity(param: CreatedToken): CreatedTokenEntity {
    return {
      accessToken: param.accessToken,
      tokenType: param.tokenType,
      expiresIn: param.expiresIn,
      scope: param.scope,
      personName: param.personName,
      personId: param.personId,
      jti: param.jti
    };
  }

}
