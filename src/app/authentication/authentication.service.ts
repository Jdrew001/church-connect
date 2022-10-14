import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GenericResponse } from '../core/models/generic.model';
import { AuthorizationService } from '../core/services/authorization.service';
import { ResourceService } from '../core/services/resource.service';
import { TokenService } from '../core/services/token.service';
import { AuthenticationConstants } from './authentication.constant';
import { AuthenticationModel, LoginRegisterModel } from './authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private get AUTH_URL() { return AuthenticationConstants.AUTH_URL; }

  constructor(
    private http: HttpClient,
    private resourceService: ResourceService,
    private tokenService: TokenService,
    private router: Router,
    private authorizationService: AuthorizationService
  ) { }

  public login(loginModel: LoginRegisterModel) {
    const url = this.resourceService.getResourceURL(`${this.AUTH_URL}${AuthenticationConstants.LOGIN_URL}`);
    (this.http.post(url, loginModel) as Observable<GenericResponse<AuthenticationModel>>).subscribe(result => {
      
      if (result.error) {
        //TODO: handle error
        return;
      }

      //TODO: handle token and refresh token 
      this.tokenService.setRefreshToken((result.data?.refreshToken) as string);
      this.tokenService.setToken((result.data?.accessToken) as string);

      // TODO: we want to start the timer for the access token expiration
      this.authorizationService.startRefreshTokenTimer(result.data?.accessToken)
      // If it expires then we want to use the refresh token --> if no refresh token, then we will redirect to login

      this.router.navigateByUrl("/main/individuals");
    });
  }

  public register(loginModel: LoginRegisterModel) {
    const url = this.resourceService.getResourceURL(`${this.AUTH_URL}${AuthenticationConstants.REGISTER_URL}`);
    this.http.post(url, loginModel).subscribe(result => {
      // handle token and refresh token 
    });
  }

  //TODO: Retrieve token from token service and send to backend
  public logout() {
    const url = this.resourceService.getResourceURL(`${this.AUTH_URL}${AuthenticationConstants.LOGOUT_URL}`);
    this.http.post(url, 'token here').subscribe(result => {
      // handle token and refresh token 
    });
  }
}
