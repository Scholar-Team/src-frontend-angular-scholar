import { TeacherEntity } from './../entity/teacher-entity';
import { ClassroomEntity } from './../entity/classroom-entity';
import { StudentEntity } from './../entity/student-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { SchoolEntity } from './../entity/school-entity';
import { map } from 'rxjs/operators';
import { School } from './../model/school-model';
import { Observable } from 'rxjs';
import { SchoolRepository } from './../repositories/school-repository';
import { SchoolMapper } from './../mapper/school-mapper';
import { Injectable } from '@angular/core';
import { PeriodEntity } from '../entity/period-entity';
import { DisciplineEntity } from '../entity/discipline-entity';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  public mapper: SchoolMapper;

  constructor(
    public baseService: SchoolRepository
  ) {
    this.mapper = new SchoolMapper();
  }

  public findAll(): Observable<DefaultResponse<SchoolEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<School> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<School> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<School> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<School> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<School> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public findPeriodsById(id: number): Observable<DefaultResponse<PeriodEntity>> {
    return this.baseService.findPeriodsById(id);
  }

  public findStudentsById(id: number): Observable<DefaultResponse<StudentEntity>> {
    return this.baseService.findStudentsById(id);
  }

  public findClassroomsById(id: number): Observable<DefaultResponse<ClassroomEntity>> {
    return this.baseService.findClassroomsById(id);
  }

  public findTeachersById(id: number): Observable<DefaultResponse<TeacherEntity>> {
    return this.baseService.findTeachersById(id);
  }

  public findDisciplinesById(id: number): Observable<DefaultResponse<DisciplineEntity>> {
    return this.baseService.findDisciplinesById(id);
  }

}
