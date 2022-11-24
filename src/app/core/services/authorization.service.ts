import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, EMPTY, map, Observable, Subscription, tap } from 'rxjs';
import { AuthenticationConstants } from 'src/app/authentication/authentication.constant';
import { AuthenticationModel, LoginRegisterModel } from 'src/app/authentication/authentication.model';
import { GenericResponse } from '../models/generic.model';
import { ResourceService } from './resource.service';
import { TokenService } from './token.service';
import jwt_decode from "jwt-decode";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private refreshTokenTimeout;
  private get AUTH_URL() { return AuthenticationConstants.AUTH_URL; }

  constructor(
    private resourceService: ResourceService,
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) { }

  //TODO: Retrieve token from token service and send to backend
  public refreshToken() {
    const refreshToken = this.tokenService.getRefreshToken();
    if (!refreshToken) {
      this.tokenService.removeAllTokens();
      this.router.navigateByUrl('/auth/login');
      return EMPTY;
    }

    const url = this.resourceService.getResourceURL(`${this.AUTH_URL}${AuthenticationConstants.REFRESH_URL}`);
    return (this.http.post(url, {token: refreshToken}) as Observable<GenericResponse<AuthenticationModel>>).pipe(tap((result) => {
      if (result.error) {
        //TODO: Display message to user
        this.tokenService.removeAllTokens();
        this.router.navigateByUrl('/auth/login');
      }

      this.tokenService.setRefreshToken(result.data.refreshToken);
      this.tokenService.setToken(result.data.accessToken);
      // this.userSubject.next(user);
      this.startRefreshTokenTimer(result.data.accessToken);
      return result;
    }));
  }

  public startRefreshTokenTimer(token: string) {
    // parse json object from base64 encoded jwt token
    const jwtToken = jwt_decode(token) as any;
    console.log("token timer started");

    // set a timeout to refresh the token two minutes before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = Math.abs(moment().diff(expires, 'milliseconds')) - (60 * 2000);
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  public stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
