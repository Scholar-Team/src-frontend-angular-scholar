import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthRepository } from '../repository/auth-repository';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtPayload: any;

  constructor(public repository: AuthRepository, private router: Router) {
    this.loadToken();
  }

  public login(username: string, password: string): object {
    return this.repository.postLogin(username, password).subscribe(resposta => {
        const json: JSON = JSON.parse(JSON.stringify(resposta));
        console.log(json);
        this.saveToken(json['access_token']);

        console.log('Novo access token criado!' + JSON.stringify(this.jwtPayload));

        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error.error.error_description);
      });
  }

  public logout(): object {
    return this.repository.postLogout().subscribe(response => {
        this.removeToken();
        this.router.navigate(['/login']);
      },
      (e) => {
        console.log(e.error.error_description);
      });
  }

  public hasPermission(permission: string): boolean {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  public hasAnyPermission(roles: any): boolean {
    for (const role of roles) {
      if (this.hasPermission(role)) {
        return true;
      }
    }

    return false;
  }

  public isTokenValid(): boolean {
    const token = localStorage.getItem('token');

    return !token || this.isTokenExpired();
  }

  public getNewToken(): object {
    return this.repository.postRefreshToken().subscribe(response => {
      const json: JSON = JSON.parse(JSON.stringify(response));
      this.saveToken(json['access_token']);

      console.log('Novo access token criado pelo refresh token! ' + JSON.stringify(this.jwtPayload));
      },
      (error) => {
        console.log(error.error.error_description);
        this.router.navigate(['/login']);
      });
  }

  private isTokenExpired(): boolean {
    this.repository.postCheckToken().subscribe(response => {
      const json: JSON = JSON.parse(JSON.stringify(response));

      if (json['active']){
        return false;
      }
    },
    (e) => {
        this.getNewToken();
    });

    return true;
  }

  private saveToken(token: string): void {
    this.jwtPayload = JSON.parse(atob(token.split('.')[1]));

    localStorage.setItem('token', token);
  }

  private removeToken(): void {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  private loadToken(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.saveToken(token);
    }
  }

}
