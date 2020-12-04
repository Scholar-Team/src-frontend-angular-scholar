import { FeedbackEntity } from './../entity/Feedback-entity';
import { Injectable } from '@angular/core';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { BaseRepository } from '@core/repository/base-repository';
@Injectable({
  providedIn: 'root',
})
export class FeedbackRepository {

  private baseUrl: string;

  constructor(
    private baseService: BaseRepository
  ) {
    this.baseUrl = `${environment.url_api}/feedback`;
  }

  public findAll(): Observable<DefaultResponse<FeedbackEntity>> {
    return this.baseService.findAll<FeedbackEntity>(
      this.baseUrl
    );
  }

  public findById(id: number): Observable<DefaultResponse<FeedbackEntity>> {
    return this.baseService.findById<FeedbackEntity>(
      this.baseUrl, id
    );
  }

  public post(body: any): Observable<DefaultResponse<FeedbackEntity>> {
    return this.baseService.post<FeedbackEntity>(
      this.baseUrl, body
    );
  }

  public putById(id: number, body: any): Observable<DefaultResponse<FeedbackEntity>> {
    return this.baseService.putById<FeedbackEntity>(
      this.baseUrl, id, body
    );
  }

  public patchById(id: number, body: any): Observable<DefaultResponse<FeedbackEntity>> {
    return this.baseService.patchById<FeedbackEntity>(
      this.baseUrl, id, body
    );
  }

  public deleteById(id: number): Observable<DefaultResponse<FeedbackEntity>> {
    return this.baseService.deleteById<FeedbackEntity>(
      this.baseUrl, id
    );
  }
}
