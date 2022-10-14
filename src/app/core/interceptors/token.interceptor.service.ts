import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { CoreConstants } from '../core.constants';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    if (!this.checkForPublic(req)) {
      if (!token) {
        // TODO: Show an alert message to the user
        return EMPTY;
      }

      req = req.clone({
        setHeaders: {
          "Authorization": `Bearer ${token}`
        }
      });
    }

    return next.handle(req);
  }

  private checkForPublic(req: HttpRequest<any>) {
    const urls = CoreConstants.PUBLIC_URLS;
    let result = false;
    req.url
    urls.forEach(item => {
      if (req.url.includes(item)) {
        result = true;
      }
    });

    return result;
  }

}
