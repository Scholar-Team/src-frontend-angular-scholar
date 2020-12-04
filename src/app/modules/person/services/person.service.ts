import { map } from 'rxjs/operators';
import { Person } from './../model/Person-model';
import { PersonEntity } from './../entity/Person-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { PersonRepository } from './../repositories/Person-repository';
import { PersonMapper } from './../mapper/Person-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public mapper: PersonMapper;

  constructor(
    public baseService: PersonRepository
  ) {
    this.mapper = new PersonMapper();
  }

  public findAll(): Observable<DefaultResponse<PersonEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Person> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Person> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Person> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Person> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Person> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }
}
