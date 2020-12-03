import { TokenEntity } from './../entity/token-entity';
import { Token } from './../model/token-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class TokenMapper extends Mapper<Token, TokenEntity> {

  entityToModel(param: TokenEntity): Token {
    return {
      userName: param.userName,
      scope: param.scope,
      active: param.active,
      personName: param.personName,
      exp: param.exp,
      authorities: param.authorities,
      jti: param.jti,
      clientId: param.clientId,
      personId: param.personId
    };
  }

  modelToEntity(param: Token): TokenEntity {
    return {
      userName: param.userName,
      scope: param.scope,
      active: param.active,
      personName: param.personName,
      exp: param.exp,
      authorities: param.authorities,
      jti: param.jti,
      clientId: param.clientId,
      personId: param.personId
    };
  }

}
