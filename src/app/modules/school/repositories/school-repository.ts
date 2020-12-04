import { DisciplineEntity } from './../entity/discipline-entity';
import { TeacherEntity } from './../entity/teacher-entity';
import { StudentEntity } from './../entity/student-entity';
import { PeriodEntity } from './../entity/period-entity';
import { BaseRepository } from '@core/repository/base-repository';
import { DefaultResponse } from '@core/utils/default-response';
import { SchoolEntity } from './../entity/school-entity';
import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassroomEntity } from '../entity/classroom-entity';

@Injectable({
    providedIn: 'root',
})
export class SchoolRepository {

    private baseUrl: string;

    constructor(
      private baseService: BaseRepository
    ) {
      this.baseUrl = `${environment.url_api}/school`;
    }

    public findAll(): Observable<DefaultResponse<SchoolEntity>> {
      return this.baseService.findAll<SchoolEntity>(
        this.baseUrl
      );
    }

    public findById(id: number): Observable<DefaultResponse<SchoolEntity>> {
      return this.baseService.findById<SchoolEntity>(
        this.baseUrl, id
      );
    }

    public post(body: any): Observable<DefaultResponse<SchoolEntity>> {
      return this.baseService.post<SchoolEntity>(
        this.baseUrl, body
      );
    }

    public putById(id: number, body: any): Observable<DefaultResponse<SchoolEntity>> {
      return this.baseService.putById<SchoolEntity>(
        this.baseUrl, id, body
      );
    }

    public patchById(id: number, body: any): Observable<DefaultResponse<SchoolEntity>> {
      return this.baseService.patchById<SchoolEntity>(
        this.baseUrl, id, body
      );
    }

    public deleteById(id: number): Observable<DefaultResponse<SchoolEntity>> {
      return this.baseService.deleteById<SchoolEntity>(
        this.baseUrl, id
      );
    }

    public findPeriodsById(id: number): Observable<DefaultResponse<PeriodEntity>> {
      return this.baseService.findSomethingById<PeriodEntity>(
        this.baseUrl, 'periods', id
      );
    }

    public findStudentsById(id: number): Observable<DefaultResponse<StudentEntity>> {
      return this.baseService.findSomethingById<StudentEntity>(
        this.baseUrl, 'students', id
      );
    }

    public findClassroomsById(id: number): Observable<DefaultResponse<ClassroomEntity>> {
      return this.baseService.findSomethingById<ClassroomEntity>(
        this.baseUrl, 'classrooms', id
      );
    }

    public findTeachersById(id: number): Observable<DefaultResponse<TeacherEntity>> {
      return this.baseService.findSomethingById<TeacherEntity>(
        this.baseUrl, 'teachers', id
      );
    }

    public findDisciplinesById(id: number): Observable<DefaultResponse<DisciplineEntity>> {
      return this.baseService.findSomethingById<DisciplineEntity>(
        this.baseUrl, 'disciplines', id
      );
    }
}
