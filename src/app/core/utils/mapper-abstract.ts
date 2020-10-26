export abstract class Mapper<M, E> {
  abstract entityToModel(param: E): M;
  abstract modelToEntity(param: M): E;
}
