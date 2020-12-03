import { BaseHttpService } from './../../../core/services/base-http.service';
import { Person } from '@person/model/person-model';
import { PersonEntity } from '@person/entity/person-entity';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { PersonMapper } from './../mapper/person-mapper';
import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  mapper = new PersonMapper();

  constructor(
    public http: BaseHttpService,
  ) { }

  public findAll(): Observable<Person> {
    return this.http
      .getAll<PersonEntity[]>(`${environment.url_api}/person`)
      .pipe(mergeMap((x) => x.data))
      .pipe(map((x) => this.mapper.entityToModel(x)));
  }

  public findById(id: number): Observable<Person> {
    return this.http
      .getAll<PersonEntity>(`${environment.url_api}/person/${id}`)
      .pipe(map((x) => this.mapper.entityToModel(x.data)));
  }

  /*public patchById(id: number, person: Person): Observable<Person> {
    return this.http
      .patch<PersonEntity>(`${environment.url_api}/person/${id}`)
      .pipe(map((x) => this.mapper.entityToModel(x.data)));
  }*/

}
