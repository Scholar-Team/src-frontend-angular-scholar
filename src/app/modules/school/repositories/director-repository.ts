import { DirectorEntity } from './../entity/Director-entity';
import { Injectable } from '@angular/core';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { BaseRepository } from '@core/repository/base-repository';
@Injectable({
  providedIn: 'root',
})
export class DirectorRepository {

  private baseUrl: string;

  constructor(
    private baseService: BaseRepository
  ) {
    this.baseUrl = `${environment.url_api}/director`;
  }

  public findAll(): Observable<DefaultResponse<DirectorEntity>> {
    return this.baseService.findAll<DirectorEntity>(
      this.baseUrl
    );
  }

  public findById(id: number): Observable<DefaultResponse<DirectorEntity>> {
    return this.baseService.findById<DirectorEntity>(
      this.baseUrl, id
    );
  }

  public post(body: any): Observable<DefaultResponse<DirectorEntity>> {
    return this.baseService.post<DirectorEntity>(
      this.baseUrl, body
    );
  }

  public putById(id: number, body: any): Observable<DefaultResponse<DirectorEntity>> {
    return this.baseService.putById<DirectorEntity>(
      this.baseUrl, id, body
    );
  }

  public patchById(id: number, body: any): Observable<DefaultResponse<DirectorEntity>> {
    return this.baseService.patchById<DirectorEntity>(
      this.baseUrl, id, body
    );
  }

  public deleteById(id: number): Observable<DefaultResponse<DirectorEntity>> {
    return this.baseService.deleteById<DirectorEntity>(
      this.baseUrl, id
    );
  }
}
