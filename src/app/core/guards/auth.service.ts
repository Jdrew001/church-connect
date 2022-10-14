import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  isAuthenticated = false;

  constructor(
    private authorizationService: AuthorizationService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const refreshToken$ = this.authorizationService.refreshToken()
    const result = await lastValueFrom(refreshToken$);
    if (result.error) {
      this.router.navigateByUrl("/auth/login");
      return false;
    }

    return true;
  }
}
