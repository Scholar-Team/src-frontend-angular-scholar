import { map } from 'rxjs/operators';
import { Classroom } from './../model/classroom-model';
import { ClassroomEntity } from './../entity/classroom-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { ClassroomRepository } from './../repositories/classroom-repository';
import { ClassroomMapper } from './../mapper/classroom-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  public mapper: ClassroomMapper;

  constructor(
    public baseService: ClassroomRepository
  ) {
    this.mapper = new ClassroomMapper();
  }

  public findAll(): Observable<DefaultResponse<ClassroomEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Classroom> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Classroom> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Classroom> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Classroom> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Classroom> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }
}
