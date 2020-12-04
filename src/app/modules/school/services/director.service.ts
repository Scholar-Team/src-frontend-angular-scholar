import { map } from 'rxjs/operators';
import { Director } from './../model/director-model';
import { DirectorEntity } from './../entity/director-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { Observable } from 'rxjs';
import { DirectorRepository } from './../repositories/director-repository';
import { DirectorMapper } from './../mapper/director-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  public mapper: DirectorMapper;

  constructor(
    public baseService: DirectorRepository
  ) {
    this.mapper = new DirectorMapper();
  }

  public findAll(): Observable<DefaultResponse<DirectorEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Director> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Director> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Director> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Director> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Director> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }
}
