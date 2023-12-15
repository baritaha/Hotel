// notification.service.ts

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showInfoMessage(message: string, title: string) {
    this.toastr.info(message, title);
  }

  // You can create other methods for error, success, warning messages, etc.
}
