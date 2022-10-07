import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private TOKEN_KEY = "TOKEN";
  private REFRESH_TOKEN_KEY = "REFRESH_TOKEN";

  constructor() { }

  setRefreshToken(token: string) {
    return localStorage.setItem(this.REFRESH_TOKEN_KEY, token);
  }

  getRefreshToken(): string | null {
    return sessionStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  removeRefreshToken(token: string) {
    sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  setToken(token: string) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  removeToken(token: string) {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}
