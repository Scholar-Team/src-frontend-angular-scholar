import { map } from 'rxjs/operators';
import { ClassRepository } from './../repositories/class-repository';
import { Class } from './../model/class-model';
import { ClassEntity } from './../entity/class-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { ClassMapper } from './../mapper/class-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  public mapper: ClassMapper;

  constructor(
    public baseService: ClassRepository
  ) {
    this.mapper = new ClassMapper();
  }

  public findAll(): Observable<DefaultResponse<ClassEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Class> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Class> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Class> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Class> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Class> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }
}
