import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from '../core/services/resource.service';
import { TokenService } from '../core/services/token.service';
import { AuthenticationConstants } from './authentication.constant';
import { LoginRegisterModel } from './authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private get AUTH_URL() { return AuthenticationConstants.AUTH_URL; }

  constructor(
    private http: HttpClient,
    private resourceService: ResourceService,
    private tokenService: TokenService
  ) { }

  public login(loginModel: LoginRegisterModel) {
    const url = this.resourceService.getResourceURL(`${this.AUTH_URL}${AuthenticationConstants.LOGIN_URL}`);
    this.http.post(url, loginModel).subscribe(result => {
      // handle token and refresh token 
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

  //TODO: Retrieve token from token service and send to backend
  public refreshToken() {
    const url = this.resourceService.getResourceURL(`${this.AUTH_URL}${AuthenticationConstants.REFRESH_URL}`);
    this.http.post(url, 'token here').subscribe(result => {
      // handle token and refresh token 
    });
  }
}
