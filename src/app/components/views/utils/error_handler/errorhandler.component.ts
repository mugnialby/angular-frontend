import { Component } from '@angular/core';
import { ToastService } from '../../../../services/utils/toast/toast.service';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'error-handler',
  standalone: true,
  imports: [ToastComponent],
  templateUrl: './errorhandler.component.html',
  styleUrl: './errorhandler.component.css'
})
export class ErrorHandlerComponent {
  constructor(public toastService: ToastService) {}

  handleRequestError(e: any) {
    if (e && "4" === e.status.toString()[0]) {
      this.toastService.warning(e.error.message);
    } else if (e) {
      this.toastService.error(e.error.message);
    }
  }
}