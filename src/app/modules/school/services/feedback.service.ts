import { map } from 'rxjs/operators';
import { Feedback } from './../model/feedback-model';
import { FeedbackEntity } from './../entity/feedback-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { FeedbackRepository } from './../repositories/feedback-repository';
import { FeedbackMapper } from './../mapper/feedback-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  public mapper: FeedbackMapper;

  constructor(
    public baseService: FeedbackRepository
  ) {
    this.mapper = new FeedbackMapper();
  }

  public findAll(): Observable<DefaultResponse<FeedbackEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Feedback> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Feedback> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Feedback> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Feedback> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Feedback> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }
}
