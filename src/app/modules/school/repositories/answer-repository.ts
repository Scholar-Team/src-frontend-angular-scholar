import { AnswerEntity } from './../entity/answer-entity';
import { BaseRepository } from '@core/repository/base-repository';
import { DefaultResponse } from '@core/utils/default-response';
import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AnswerRepository {

    private baseUrl: string;

    constructor(
      private baseService: BaseRepository
    ) {
      this.baseUrl = `${environment.url_api}/answer`;
    }

    public findAll(): Observable<DefaultResponse<AnswerEntity>> {
      return this.baseService.findAll<AnswerEntity>(
        this.baseUrl
      );
    }

    public findById(id: number): Observable<DefaultResponse<AnswerEntity>> {
      return this.baseService.findById<AnswerEntity>(
        this.baseUrl, id
      );
    }

    public post(body: any): Observable<DefaultResponse<AnswerEntity>> {
      return this.baseService.post<AnswerEntity>(
        this.baseUrl, body
      );
    }

    public putById(id: number, body: any): Observable<DefaultResponse<AnswerEntity>> {
      return this.baseService.putById<AnswerEntity>(
        this.baseUrl, id, body
      );
    }

    public patchById(id: number, body: any): Observable<DefaultResponse<AnswerEntity>> {
      return this.baseService.patchById<AnswerEntity>(
        this.baseUrl, id, body
      );
    }

    public deleteById(id: number): Observable<DefaultResponse<AnswerEntity>> {
      return this.baseService.deleteById<AnswerEntity>(
        this.baseUrl, id
      );
    }
}
