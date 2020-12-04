import { map } from 'rxjs/operators';
import { Answer } from './../model/answer-model';
import { Observable } from 'rxjs';
import { AnswerEntity } from './../entity/answer-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { AnswerRepository } from './../repositories/answer-repository';
import { AnswerMapper } from './../mapper/answer-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  public mapper: AnswerMapper;

  constructor(
    public baseService: AnswerRepository
  ) {
    this.mapper = new AnswerMapper();
  }

  public findAll(): Observable<DefaultResponse<AnswerEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Answer> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Answer> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Answer> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Answer> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Answer> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }
}
