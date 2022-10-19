import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceService } from '../core/services/resource.service';
import { IndividualConstants } from './individual.constant';

@Injectable({
  providedIn: 'root'
})
export class IndividualService {

  private get URL () { return IndividualConstants.INDIVIDUAL_URL; }

  constructor(
    private resourceService: ResourceService,
    private http: HttpClient
  ) { }

  fetchIndividuals(): Observable<any> {
    const url = this.resourceService.getResourceURL(`${this.URL}${IndividualConstants.FETCH_URL}`);
    return this.http.get(url);
  }
}
