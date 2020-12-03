import { CreatedToken } from './../model/created-token-model';
import { Token } from './../model/token-model';
import { AuthUtils } from './../utils/auth-utils';
import { environment } from '@environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthRepository {

    constructor(
      private http: HttpClient
    ) { }

    public postLogin(
      username: string,
      password: string
    ): Observable<CreatedToken> {
        const body = AuthUtils.getFormLogin(username, password);
        const headers = AuthUtils.getAuthHeaders();

        return this.http.post(
          `${environment.url_api}/oauth/token`,
          body, { headers, withCredentials: true }
        );
    }

    public postRefreshToken(): Observable<CreatedToken> {
        const body = AuthUtils.grantTypeRefreshToken;
        const headers = AuthUtils.getAuthHeaders();

        return this.http
            .post(`${environment.url_api}/oauth/token`,
              body, { headers, withCredentials: true });
    }

    public postCheckToken(): Observable<Token> {
        const body = AuthUtils.getBodyToken();

        const headers = new HttpHeaders({
          'Content-Type': AuthUtils.formUrlEncoded
        });

        return this.http.post(
          `${environment.url_api}/oauth/check_token`,
          body, { headers }
        );
    }

    public deleteLogout(): Observable<object> {
        return this.http.delete(
          `${environment.url_api}/token/revoke`
        );
    }

}
