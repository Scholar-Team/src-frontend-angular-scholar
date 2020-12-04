import { map } from 'rxjs/operators';
import { Activity } from './../model/activity-model';
import { Observable } from 'rxjs';
import { ActivityEntity } from './../entity/activity-entity';
import { DefaultResponse } from '@core/utils/default-response';
import { ActivityRepository } from './../repositories/activity-repository';
import { ActivityMapper } from './../mapper/activity-mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  public mapper: ActivityMapper;

  constructor(
    public baseService: ActivityRepository
  ) {
    this.mapper = new ActivityMapper();
  }

  public findAll(): Observable<DefaultResponse<ActivityEntity>> {
    return this.baseService.findAll();
  }

  public findById(id: number): Observable<Activity> {
    return this.baseService.findById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public post(body: any): Observable<Activity> {
    return this.baseService.post(body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public putById(id: number, body: any): Observable<Activity> {
    return this.baseService.putById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public patchById(id: number, body: any): Observable<Activity> {
    return this.baseService.patchById(id, body)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }

  public deleteById(id: number): Observable<Activity> {
    return this.baseService.deleteById(id)
      .pipe(map(x => this.mapper.entityToModel(x.data)));
  }
}
