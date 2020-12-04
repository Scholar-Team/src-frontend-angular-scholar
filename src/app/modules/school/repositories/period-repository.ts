import { PeriodEntity } from './../entity/period-entity';
import { Injectable } from '@angular/core';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { BaseRepository } from '@core/repository/base-repository';
@Injectable({
  providedIn: 'root',
})
export class PeriodRepository {

  private baseUrl: string;

  constructor(
    private baseService: BaseRepository
  ) {
    this.baseUrl = `${environment.url_api}/period`;
  }

  public findAll(): Observable<DefaultResponse<PeriodEntity>> {
    return this.baseService.findAll<PeriodEntity>(
      this.baseUrl
    );
  }

  public findById(id: number): Observable<DefaultResponse<PeriodEntity>> {
    return this.baseService.findById<PeriodEntity>(
      this.baseUrl, id
    );
  }

  public post(body: any): Observable<DefaultResponse<PeriodEntity>> {
    return this.baseService.post<PeriodEntity>(
      this.baseUrl, body
    );
  }

  public putById(id: number, body: any): Observable<DefaultResponse<PeriodEntity>> {
    return this.baseService.putById<PeriodEntity>(
      this.baseUrl, id, body
    );
  }

  public patchById(id: number, body: any): Observable<DefaultResponse<PeriodEntity>> {
    return this.baseService.patchById<PeriodEntity>(
      this.baseUrl, id, body
    );
  }

  public deleteById(id: number): Observable<DefaultResponse<PeriodEntity>> {
    return this.baseService.deleteById<PeriodEntity>(
      this.baseUrl, id
    );
  }
}
