import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponse } from '../core/models/generic.model';
import { ResourceService } from '../core/services/resource.service';
import { TableConfig } from '../shared/models/table-config.model';
import { IndividualConstants } from './individual.constant';
import { IndividualModel } from './models/individual.model';

@Injectable({
  providedIn: 'root'
})
export class IndividualService {

  private get URL () { return IndividualConstants.INDIVIDUAL_URL; }

  constructor(
    private resourceService: ResourceService,
    private http: HttpClient
  ) { }

  fetchIndividuals(): Observable<GenericResponse<{individuals: Array<IndividualModel>, configuration: TableConfig}>> {
    const url = this.resourceService.getResourceURL(`${this.URL}${IndividualConstants.FETCH_URL}`);
    return this.http.get(url) as Observable<GenericResponse<{individuals: Array<IndividualModel>, configuration: TableConfig}>>;
  }
}
