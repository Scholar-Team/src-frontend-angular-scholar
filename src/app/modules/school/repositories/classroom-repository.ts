import { ClassroomEntity } from './../entity/classroom-entity';
import { Injectable } from '@angular/core';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { BaseRepository } from '@core/repository/base-repository';
@Injectable({
  providedIn: 'root',
})
export class ClassroomRepository {

  private baseUrl: string;

  constructor(
    private baseService: BaseRepository
  ) {
    this.baseUrl = `${environment.url_api}/classroom`;
  }

  public findAll(): Observable<DefaultResponse<ClassroomEntity>> {
    return this.baseService.findAll<ClassroomEntity>(
      this.baseUrl
    );
  }

  public findById(id: number): Observable<DefaultResponse<ClassroomEntity>> {
    return this.baseService.findById<ClassroomEntity>(
      this.baseUrl, id
    );
  }

  public post(body: any): Observable<DefaultResponse<ClassroomEntity>> {
    return this.baseService.post<ClassroomEntity>(
      this.baseUrl, body
    );
  }

  public putById(id: number, body: any): Observable<DefaultResponse<ClassroomEntity>> {
    return this.baseService.putById<ClassroomEntity>(
      this.baseUrl, id, body
    );
  }

  public patchById(id: number, body: any): Observable<DefaultResponse<ClassroomEntity>> {
    return this.baseService.patchById<ClassroomEntity>(
      this.baseUrl, id, body
    );
  }

  public deleteById(id: number): Observable<DefaultResponse<ClassroomEntity>> {
    return this.baseService.deleteById<ClassroomEntity>(
      this.baseUrl, id
    );
  }
}
