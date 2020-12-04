import { map } from 'rxjs/operators';
import { Discipline } from './../model/discipline-model';
import { DisciplineEntity } from './../entity/discipline-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { DisciplineRepository } from './../repositories/discipline-repository';
import { DisciplineMapper } from './../mapper/discipline-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {

  public mapper: DisciplineMapper;

  constructor(
    public baseService: DisciplineRepository
  ) {
    this.mapper = new DisciplineMapper();
  }

  public findAll(): Observable<DefaultResponse<DisciplineEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Discipline> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Discipline> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Discipline> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Discipline> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Discipline> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }
}
