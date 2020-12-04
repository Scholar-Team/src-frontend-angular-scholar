import { AuthUtils } from './../utils/auth-utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, retry, delay, map } from 'rxjs/operators';
import { DefaultResponse } from '../utils/default-response';

@Injectable({
  providedIn: 'root',
})
export class BaseRepository {

  public headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders();
  }

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

  public putById<T>(
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

  public patchById<T>(
    url: string,
    id: number,
    body: any,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.requestRepository<T>(
      'PATCH',
      `${url}/${id}`,
      body,
      headers
    );
  }

  public findById<T>(
    url: string,
    id: number,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.requestRepository<T>(
      'GET',
      `${url}/${id}`,
      headers
    );
  }

  public findSomethingById<T>(
    url: string,
    something: string,
    id: number,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.requestRepository<T>(
      'GET',
      `${url}/${id}/${something}`,
      headers
    );
  }

  public findAll<T>(
    url: string,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.requestRepository<T>(
      'GET',
      `${url}`,
      headers
    );
  }

  public deleteById<T>(
    url: string,
    id: number,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.requestRepository<T>(
      'DELETE',
      `${url}/${id}`,
      headers
    );
  }

  public requestRepository<T>(
    type: string,
    url: string,
    body: any = null,
    headers: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    headers = headers || this.getDefaultHeader();

    return this.http
      .request<T>(type, url, { body, headers })
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

  private getDefaultHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      Authorization: AuthUtils.getHeaderBearerToken(),
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache'
    });

    return headers;
  }

}
