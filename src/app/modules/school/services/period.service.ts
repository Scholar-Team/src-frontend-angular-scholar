import { map } from 'rxjs/operators';
import { Period } from './../model/period-model';
import { PeriodEntity } from './../entity/period-entity';
import { DefaultResponse } from './../../../core/utils/default-response';
import { Observable } from 'rxjs';
import { PeriodRepository } from './../repositories/period-repository';
import { PeriodMapper } from './../mapper/period-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  public mapper: PeriodMapper;

  constructor(
    public baseService: PeriodRepository
  ) {
    this.mapper = new PeriodMapper();
  }

  public findAll(): Observable<DefaultResponse<PeriodEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Period> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Period> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Period> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Period> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Period> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }
}
