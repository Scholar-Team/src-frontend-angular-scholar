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
    useDefaultHeader: boolean = true,
    useFormData: boolean = false,
    newHeaders: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    return this.request<T>(
      'POST',
      `${url}`,
      body,
      useDefaultHeader,
      useFormData,
      newHeaders
    );
  }

  public put<T>(
    url: string,
    body: any,
    useDefaultHeader: boolean = true,
    useFormData: boolean = false
  ): Observable<DefaultResponse<T>> {
    return this.request<T>(
      'PUT',
      `${url}`,
      body,
      useDefaultHeader,
      useFormData
    );
  }

  public patch<T>(url: string, body: any): Observable<DefaultResponse<T>> {
    return this.request<T>('PATCH', `${url}`, body);
  }

  public get<T>(url: string): Observable<DefaultResponse<T>> {
    return this.request<T>('GET', `${url}`);
  }

  public delete<T>(url: string, id: number): Observable<DefaultResponse<T>> {
    return this.request<T>('DELETE', `${url}`, { id });
  }

  private request<T>(
    type: string,
    url: string,
    body: any = null,
    useDefaultHeader: boolean = true,
    useFormData: boolean = false,
    newHeaders: HttpHeaders = null
  ): Observable<DefaultResponse<T>> {
    this.service.isTokenValid();

    let headers: HttpHeaders;
    headers = newHeaders || this.getDefaultHeader(useFormData);

    if (environment.logRequest) {
      console.dir({ type, url, headers, body });
    }

    if (environment.traceRequest) {
      // tslint:disable-next-line: no-console
      console.trace('trace');
    }

    return this.http
      .request<T>(type, url, {
        body,
        headers
      })
      .pipe(
        shareReplay(),
        retry(0),
        delay(500),
        map((x) => this.onSuccess<T>(type, x))
      );
  }

  private getDefaultHeader(useFormData: boolean = false): HttpHeaders{
    const token: string = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });

    return headers;
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

  getData(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(map(
        this.extractData
      ));
  }

  private extractData(res: Response): any {
    const body = res;

    return body || {};
  }

}
