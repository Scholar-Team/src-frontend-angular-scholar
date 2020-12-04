import { ClassEntity } from './../entity/class-entity';
import { DisciplineEntity } from './../entity/discipline-entity';
import { map } from 'rxjs/operators';
import { Student } from './../model/student-model';
import { StudentEntity } from './../entity/student-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { StudentRepository } from './../repositories/student-repository';
import { StudentMapper } from './../mapper/student-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public mapper: StudentMapper;

  constructor(
    public baseService: StudentRepository
  ) {
    this.mapper = new StudentMapper();
  }

  public findAll(): Observable<DefaultResponse<StudentEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Student> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Student> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Student> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Student> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Student> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public findDisciplinesById(id: number): Observable<DefaultResponse<DisciplineEntity>> {
    return this.baseService.findDisciplinesById(id);
  }

  public findClassesById(id: number): Observable<DefaultResponse<ClassEntity>> {
    return this.baseService.findClassesById(id);
  }
}
