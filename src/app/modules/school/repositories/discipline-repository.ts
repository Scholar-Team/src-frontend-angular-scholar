import { DisciplineEntity } from './../entity/Discipline-entity';
import { Injectable } from '@angular/core';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { BaseRepository } from '@core/repository/base-repository';
@Injectable({
  providedIn: 'root',
})
export class DisciplineRepository {

  private baseUrl: string;

  constructor(
    private baseService: BaseRepository
  ) {
    this.baseUrl = `${environment.url_api}/discipline`;
  }

  public findAll(): Observable<DefaultResponse<DisciplineEntity>> {
    return this.baseService.findAll<DisciplineEntity>(
      this.baseUrl
    );
  }

  public findById(id: number): Observable<DefaultResponse<DisciplineEntity>> {
    return this.baseService.findById<DisciplineEntity>(
      this.baseUrl, id
    );
  }

  public post(body: any): Observable<DefaultResponse<DisciplineEntity>> {
    return this.baseService.post<DisciplineEntity>(
      this.baseUrl, body
    );
  }

  public putById(id: number, body: any): Observable<DefaultResponse<DisciplineEntity>> {
    return this.baseService.putById<DisciplineEntity>(
      this.baseUrl, id, body
    );
  }

  public patchById(id: number, body: any): Observable<DefaultResponse<DisciplineEntity>> {
    return this.baseService.patchById<DisciplineEntity>(
      this.baseUrl, id, body
    );
  }

  public deleteById(id: number): Observable<DefaultResponse<DisciplineEntity>> {
    return this.baseService.deleteById<DisciplineEntity>(
      this.baseUrl, id
    );
  }
}
