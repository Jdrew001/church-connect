import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private messageService: MessageService
  ) { }

  showMessage(type: 'success' | 'error' | 'warning', message: string, title: string) {
    this.messageService.add({severity: type, summary:title, detail: message});
  }
}
