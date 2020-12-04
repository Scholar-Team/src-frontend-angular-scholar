import { ClassEntity } from './../entity/class-entity';
import { DisciplineEntity } from './../entity/discipline-entity';
import { StudentEntity } from './../entity/Student-entity';
import { Injectable } from '@angular/core';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { BaseRepository } from '@core/repository/base-repository';
@Injectable({
  providedIn: 'root',
})
export class StudentRepository {

  private baseUrl: string;

  constructor(
    private baseService: BaseRepository
  ) {
    this.baseUrl = `${environment.url_api}/student`;
  }

  public findAll(): Observable<DefaultResponse<StudentEntity>> {
    return this.baseService.findAll<StudentEntity>(
      this.baseUrl
    );
  }

  public findById(id: number): Observable<DefaultResponse<StudentEntity>> {
    return this.baseService.findById<StudentEntity>(
      this.baseUrl, id
    );
  }

  public post(body: any): Observable<DefaultResponse<StudentEntity>> {
    return this.baseService.post<StudentEntity>(
      this.baseUrl, body
    );
  }

  public putById(id: number, body: any): Observable<DefaultResponse<StudentEntity>> {
    return this.baseService.putById<StudentEntity>(
      this.baseUrl, id, body
    );
  }

  public patchById(id: number, body: any): Observable<DefaultResponse<StudentEntity>> {
    return this.baseService.patchById<StudentEntity>(
      this.baseUrl, id, body
    );
  }

  public deleteById(id: number): Observable<DefaultResponse<StudentEntity>> {
    return this.baseService.deleteById<StudentEntity>(
      this.baseUrl, id
    );
  }

  public findDisciplinesById(id: number): Observable<DefaultResponse<DisciplineEntity>> {
    return this.baseService.findSomethingById<DisciplineEntity>(
      this.baseUrl, 'disciplines', id
    );
  }

  public findClassesById(id: number): Observable<DefaultResponse<ClassEntity>> {
    return this.baseService.findSomethingById<ClassEntity>(
      this.baseUrl, 'classes', id
    );
  }
}
