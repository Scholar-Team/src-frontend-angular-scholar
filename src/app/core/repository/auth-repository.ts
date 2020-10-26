import { environment } from '@environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthRepository {

    constructor(private http: HttpClient) { }

    public postLogin(username: string, password: string): Observable<object> {
        const body = `username=${username}&password=${password}&grant_type=password`;

        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${environment.authorization}`
        });

        return this.http
          .post(`${environment.url_api}oauth/token`,
            body, { headers, withCredentials: true });
    }

    public postRefreshToken(): Observable<object> {
        const body = 'grant_type=refresh_token';

        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${environment.authorization}`
        });

        return this.http
            .post(`${environment.url_api}oauth/token`,
              body, { headers, withCredentials: true });
    }

    public postCheckToken(): Observable<object> {
        const body = `token=${localStorage.getItem('token')}`;

        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });

        return this.http
            .post(`${environment.url_api}oauth/check_token`,
              body, { headers });
    }

    public postLogout(): Observable<object> {
        return this.http
            .delete(`${environment.url_api}token/revoke`);
    }

}
