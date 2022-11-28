import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { GenericResponse } from '../core/models/generic.model';
import { ResourceService } from '../core/services/resource.service';
import { ToastService } from '../core/services/toast.service';
import { CreateIndividualConst } from './create-individual.constant';
import { CreateIndividual } from './model/create.model';

@Injectable({
  providedIn: 'root'
})
export class CreateIndividualService {

  constructor(
    private http: HttpClient,
    private resourceService: ResourceService,
    private toastService: ToastService
  ) { }

  createNewIndividual(body: CreateIndividual) {
    const url = this.resourceService.getResourceURL(CreateIndividualConst.CREATE_URL);
    return this.http.post(url, body).pipe(catchError(async (err) => this.handleError(err))) as Observable<GenericResponse<any>>;
  }

  private handleError(err) {
    console.error(err);
    this.toastService.showMessage('error', 'Something went wrong', 'Error Notification');
  }
}
