import { ActivityEntity } from './../entity/Activity-entity';
import { BaseRepository } from '@core/repository/base-repository';
import { DefaultResponse } from '@core/utils/default-response';
import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ActivityRepository {

    private baseUrl: string;

    constructor(
      private baseService: BaseRepository
    ) {
      this.baseUrl = `${environment.url_api}/activity`;
    }

    public findAll(): Observable<DefaultResponse<ActivityEntity>> {
      return this.baseService.findAll<ActivityEntity>(
        this.baseUrl
      );
    }

    public findById(id: number): Observable<DefaultResponse<ActivityEntity>> {
      return this.baseService.findById<ActivityEntity>(
        this.baseUrl, id
      );
    }

    public post(body: any): Observable<DefaultResponse<ActivityEntity>> {
      return this.baseService.post<ActivityEntity>(
        this.baseUrl, body
      );
    }

    public putById(id: number, body: any): Observable<DefaultResponse<ActivityEntity>> {
      return this.baseService.putById<ActivityEntity>(
        this.baseUrl, id, body
      );
    }

    public patchById(id: number, body: any): Observable<DefaultResponse<ActivityEntity>> {
      return this.baseService.patchById<ActivityEntity>(
        this.baseUrl, id, body
      );
    }

    public deleteById(id: number): Observable<DefaultResponse<ActivityEntity>> {
      return this.baseService.deleteById<ActivityEntity>(
        this.baseUrl, id
      );
    }
}
