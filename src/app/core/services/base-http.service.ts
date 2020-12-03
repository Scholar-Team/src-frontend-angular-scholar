import { Injectable, Inject } from '@angular/core';
import { DefaultResponse } from '../utils/default-response';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {

  constructor(public http: HttpService) {}

  post<T>(
    url: string,
    body: any,
    useDefaultHeader: boolean = true,
    useFormData: boolean = false,
    newHeaders: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.http.post<T>(url, body, useDefaultHeader, useFormData, newHeaders);
  }

  put<T>(
    url: string,
    body: any,
    id: number,
    useDefaultHeader: boolean = true,
    useFormData: boolean = false
  ): Observable<DefaultResponse<T>> {
    return this.http.put<T>(`${url}/${id}`, body, useDefaultHeader, useFormData);
  }

  patch<T>(
    url: string,
    id: number,
    body: any
  ): Observable<DefaultResponse<T>> {
    return this.http.patch<T>(`${url}/${id}`, body);
  }

  get<T>(
    url: string,
    id: number
  ): Observable<DefaultResponse<T>> {
    return this.http.get<T>(`${url}/${id}`);
  }

  getAll<T>(
    url: string
  ): Observable<DefaultResponse<T>> {
    return this.http.get<T>(`${url}`);
  }

  delete<T>(
    url: string,
    id: number
  ): Observable<DefaultResponse<T>> {
    return this.http.delete<T>(url, id);
  }

}
