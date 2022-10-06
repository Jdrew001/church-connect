import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() { }

  public getResourceURL(url: any): string {
    return `${environment.BASE_URL}${url}`;
  }
}
