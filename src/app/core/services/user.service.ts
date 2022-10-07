import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreConstants } from '../core.constants';
import { GenericResponse } from '../models/generic.model';
import { ResourceService } from './resource.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private get USER_URL() { return CoreConstants.USER_URL; }

  constructor(
    private http: HttpClient,
    private resourceService: ResourceService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  public resetPassword(password: string) {
    const url = this.resourceService.getResourceURL(`${this.USER_URL}${CoreConstants.RESET_PASSWORD_FROM_INVITE}`);
    (this.http.post(url, {password: password}) as Observable<GenericResponse<any>>).subscribe(result => {
      if (result.error) {
        // TODO: Handle error
        return;
      }

      /** TODO:
       * success message
       * redirect user to login page
       */

      this.router.navigateByUrl("/auth/login");
    });
  }
}
