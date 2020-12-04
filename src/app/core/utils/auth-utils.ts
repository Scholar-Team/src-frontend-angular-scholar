import { HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';

export class AuthUtils {

  public static formUrlEncoded = 'application/x-www-form-urlencoded';
  public static grantTypeRefreshToken = 'grant_type=refresh_token';
  public static grantTypePassword = 'grant_type=password';

  public static getFormLogin(username: string, password: string): string {
    return `username=${username}&password=${password}&${this.grantTypePassword}`;
  }

  public static getHeaderBasicAuthorization(): string {
    return `Basic ${environment.authorization}`;
  }

  public static getHeaderBearerToken(): string {
    return `Bearer ${localStorage.getItem('token')}`;
  }

  public static getBodyToken(): string {
    return `token=${localStorage.getItem('token')}`;
  }

  public static getBearerHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: AuthUtils.getHeaderBearerToken()
    });
  }

  public static getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': AuthUtils.formUrlEncoded,
      Authorization: AuthUtils.getHeaderBasicAuthorization()
    });
  }

}
