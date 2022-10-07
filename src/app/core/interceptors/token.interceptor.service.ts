import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
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
    const scopeHeader = req.headers.get("scope");

    if (!scopeHeader) {

      if (!token) {
        // TODO: Show an alert message to the user
        return EMPTY;
      }

      req = req.clone({
        setHeaders: {
          "authorization": `Bearer ${token}`
        }
      });
    }

    return next.handle(req);
  }
}
