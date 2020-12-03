import { Permission } from '@person/model/permission-model';
import { Role } from '@person/model/role-model';
import { TokenUtils } from './../utils/token-utils';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthRepository } from '../repository/auth-repository';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public repository: AuthRepository,
    private router: Router
  ) {
    TokenUtils.loadToken();
  }

  public postLogin(username: string, password: string): object {
    return this.repository.postLogin(username, password).subscribe(response => {
      TokenUtils.saveToken(response.access_token);
      this.router.navigate(['/home']);

      }, (error) => {
        console.log(error.error.error_description);
      });
  }

  public deleteLogout(): object {
    return this.repository.deleteLogout().subscribe(() => {
        TokenUtils.removeToken();
        this.router.navigate(['']);

      }, (error) => {
        console.log(error.error.error_description);
      });
  }

  public hasPermission(permission: string): boolean {
    return TokenUtils.jwtPayload &&
      TokenUtils.jwtPayload.authorities.includes(permission);
  }

  public hasAnyPermission(roles: string[]): boolean {
    for (const role of roles) {
      if (this.hasPermission(role)) {
        return true;
      }
    }

    return false;
  }

  public generateNewToken(): object {
    return this.repository.postRefreshToken().subscribe(response => {
      TokenUtils.saveToken(response.access_token);

      }, (error) => {
        console.log(error.error.error_description);
        this.router.navigate(['']);
      });
  }

  public isTokenValid(): boolean {
    return TokenUtils.getToken() && this.isTokenActive();
  }

  private isTokenActive(): boolean {
    let active: boolean;

    this.repository.postCheckToken().subscribe(response => {
      active = response.active;

    }, () => {
        this.generateNewToken();
    });

    return active;
  }

}
