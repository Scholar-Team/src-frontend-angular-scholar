import { TeacherEntity } from './../entity/Teacher-entity';
import { Injectable } from '@angular/core';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { BaseRepository } from '@core/repository/base-repository';
@Injectable({
  providedIn: 'root',
})
export class TeacherRepository {

  private baseUrl: string;

  constructor(
    private baseService: BaseRepository
  ) {
    this.baseUrl = `${environment.url_api}/teacher`;
  }

  public findAll(): Observable<DefaultResponse<TeacherEntity>> {
    return this.baseService.findAll<TeacherEntity>(
      this.baseUrl
    );
  }

  public findById(id: number): Observable<DefaultResponse<TeacherEntity>> {
    return this.baseService.findById<TeacherEntity>(
      this.baseUrl, id
    );
  }

  public post(body: any): Observable<DefaultResponse<TeacherEntity>> {
    return this.baseService.post<TeacherEntity>(
      this.baseUrl, body
    );
  }

  public putById(id: number, body: any): Observable<DefaultResponse<TeacherEntity>> {
    return this.baseService.putById<TeacherEntity>(
      this.baseUrl, id, body
    );
  }

  public patchById(id: number, body: any): Observable<DefaultResponse<TeacherEntity>> {
    return this.baseService.patchById<TeacherEntity>(
      this.baseUrl, id, body
    );
  }

  public deleteById(id: number): Observable<DefaultResponse<TeacherEntity>> {
    return this.baseService.deleteById<TeacherEntity>(
      this.baseUrl, id
    );
  }
}
