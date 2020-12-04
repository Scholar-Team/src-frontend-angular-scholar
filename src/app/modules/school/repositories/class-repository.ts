import { ClassEntity } from './../entity/class-entity';
import { Injectable } from '@angular/core';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { BaseRepository } from '@core/repository/base-repository';
@Injectable({
  providedIn: 'root',
})
export class ClassRepository {

  private baseUrl: string;

  constructor(
    private baseService: BaseRepository
  ) {
    this.baseUrl = `${environment.url_api}/class`;
  }

  public findAll(): Observable<DefaultResponse<ClassEntity>> {
    return this.baseService.findAll<ClassEntity>(
      this.baseUrl
    );
  }

  public findById(id: number): Observable<DefaultResponse<ClassEntity>> {
    return this.baseService.findById<ClassEntity>(
      this.baseUrl, id
    );
  }

  public post(body: any): Observable<DefaultResponse<ClassEntity>> {
    return this.baseService.post<ClassEntity>(
      this.baseUrl, body
    );
  }

  public putById(id: number, body: any): Observable<DefaultResponse<ClassEntity>> {
    return this.baseService.putById<ClassEntity>(
      this.baseUrl, id, body
    );
  }

  public patchById(id: number, body: any): Observable<DefaultResponse<ClassEntity>> {
    return this.baseService.patchById<ClassEntity>(
      this.baseUrl, id, body
    );
  }

  public deleteById(id: number): Observable<DefaultResponse<ClassEntity>> {
    return this.baseService.deleteById<ClassEntity>(
      this.baseUrl, id
    );
  }
}
