import { AuthUtils } from './../utils/auth-utils';
import { AuthService } from './auth.service';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, retry, delay, map } from 'rxjs/operators';
import { DefaultResponse } from '../utils/default-response';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  headers = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private service: AuthService
  ) { }

  public post<T>(
    url: string,
    body: any,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.requestRepository<T>(
      'POST',
      `${url}`,
      body,
      headers
    );
  }

  public put<T>(
    url: string,
    body: any,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.requestRepository<T>(
      'PUT',
      `${url}`,
      body,
      headers
    );
  }

  public patch<T>(
    url: string,
    body: any,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.requestRepository<T>(
      'PATCH',
      `${url}`,
      body,
      headers
    );
  }

  public get<T>(
    url: string,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.requestRepository<T>(
      'GET',
      `${url}`,
      headers
    );
  }

  public delete<T>(
    url: string,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.requestRepository<T>(
      'DELETE',
      `${url}`,
      headers
    );
  }

  public requestRepository<T>(
    type: string,
    url: string,
    body: any = null,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.http
      .request<T>(type, url, { body })
      .pipe(
        shareReplay(),
        retry(0),
        delay(500),
        map((x) => {
          return this.onSuccess<T>(type, x);
        })
      );
  }

  private onCatch<T>(e: T): DefaultResponse<T> {
    const result = new DefaultResponse<T>();
    result.error(e);

    return result;
  }

  private onSuccess<T>(type: string, e: T): DefaultResponse<T> {
    const result = new DefaultResponse<T>();
    result.success(type, e);

    return result;
  }
}
