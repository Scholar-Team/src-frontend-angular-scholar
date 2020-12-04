import { Injectable, Inject } from '@angular/core';
import { DefaultResponse } from '../utils/default-response';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {

  constructor(
    public http: HttpService
  ) { }

  public post<T>(
    url: string,
    body: any,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.http.post<T>(url, body, headers);
  }

  public putById<T>(
    url: string,
    body: any,
    id: number,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.http.put<T>(`${url}/${id}`, body, headers);
  }

  public patchById<T>(
    url: string,
    id: number,
    body: any,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.http.patch<T>(`${url}/${id}`, body, headers);
  }

  public findById<T>(
    url: string,
    id: number,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.http.get<T>(`${url}/${id}`, headers);
  }

  public findAll<T>(
    url: string,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.http.get<T>(`${url}`, headers);
  }

  public deleteById<T>(
    url: string,
    id: number,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.http.delete<T>(`${url}/${id}`, headers);
  }

}
