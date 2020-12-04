import { ClassEntity } from './../entity/class-entity';
import { map } from 'rxjs/operators';
import { Teacher } from './../model/teacher-model';
import { TeacherEntity } from './../entity/teacher-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { TeacherRepository } from './../repositories/teacher-repository';
import { TeacherMapper } from './../mapper/teacher-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  public mapper: TeacherMapper;

  constructor(
    public baseService: TeacherRepository
  ) {
    this.mapper = new TeacherMapper();
  }

  public findAll(): Observable<DefaultResponse<TeacherEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Teacher> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Teacher> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Teacher> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Teacher> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Teacher> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public findClassesById(id: number): Observable<DefaultResponse<ClassEntity>> {
    return this.baseService.findClassesById(id);
  }
}
