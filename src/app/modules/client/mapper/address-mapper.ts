import { AddressEntity } from './../entity/address-entity';
import { Address } from './../model/address-model';
import { Mapper } from '@core/utils/mapper-abstract';

export class AddressMapper extends Mapper<Address, AddressEntity> {

  entityToModel(param: AddressEntity): Address {
    return {
      id: param.id,
      cep: param.cep,
      state: param.state,
      city: param.city,
      street: param.state,
      number: param.number,
      complement: param.complement
    };
  }
  modelToEntity(param: Address): AddressEntity {
    return {
      id: param.id,
      cep: param.cep,
      state: param.state,
      city: param.city,
      street: param.state,
      number: param.number,
      complement: param.complement
    };
  }

}
