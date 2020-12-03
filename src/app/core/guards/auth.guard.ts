import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

      if (this.auth.isTokenValid()) {
        if (this.auth.isTokenValid()) {
          this.router.navigate(['']);
          return false;
        }
      }

      if (next.data.roles && !this.auth.hasAnyPermission(next.data.roles)) {
        this.router.navigate(['/not-authorized']);
        return false;
      }

      return true;
  }

}
