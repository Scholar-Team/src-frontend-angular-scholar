import { PersonEntity } from './../entity/Person-entity';
import { Injectable } from '@angular/core';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { BaseRepository } from '@core/repository/base-repository';
@Injectable({
  providedIn: 'root',
})
export class PersonRepository {

  private baseUrl: string;

  constructor(
    private baseService: BaseRepository
  ) {
    this.baseUrl = `${environment.url_api}/person`;
  }

  public findAll(): Observable<DefaultResponse<PersonEntity>> {
    return this.baseService.findAll<PersonEntity>(
      this.baseUrl
    );
  }

  public findById(id: number): Observable<DefaultResponse<PersonEntity>> {
    return this.baseService.findById<PersonEntity>(
      this.baseUrl, id
    );
  }

  public post(body: any): Observable<DefaultResponse<PersonEntity>> {
    return this.baseService.post<PersonEntity>(
      this.baseUrl, body
    );
  }

  public putById(id: number, body: any): Observable<DefaultResponse<PersonEntity>> {
    return this.baseService.putById<PersonEntity>(
      this.baseUrl, id, body
    );
  }

  public patchById(id: number, body: any): Observable<DefaultResponse<PersonEntity>> {
    return this.baseService.patchById<PersonEntity>(
      this.baseUrl, id, body
    );
  }

  public deleteById(id: number): Observable<DefaultResponse<PersonEntity>> {
    return this.baseService.deleteById<PersonEntity>(
      this.baseUrl, id
    );
  }
}
