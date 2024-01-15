import { Component } from '@angular/core';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../../services/utils/toast/toast.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'ngb-toaster',
  standalone: true,
  imports: [
    NgbToast, 
    NgFor
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  constructor(public toastService: ToastService) {
    
  }
}
